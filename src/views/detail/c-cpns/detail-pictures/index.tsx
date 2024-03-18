import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, shallowEqualApp } from '@/store'
import { PicturesWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const DetailPictures: FC<IProps> = () => {
  /** 定义组件内部状态 */
  const [showBrowser, setShowBrowser] = useState(false)

  /** 获取详情数据 */
  const { detailInfo } = useAppSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqualApp
  )

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={() => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  )
}

export default memo(DetailPictures)
