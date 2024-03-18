// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { IndicatorWrapper } from './style'

interface IProps {
  children?: ReactNode
  selectIndex: number
}

const Indicator: FC<IProps> = (props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current?.children[
      selectIndex
    ] as HTMLElement
    const itemLeft = selectItemEl?.offsetLeft
    const itemWidth = selectItemEl?.clientWidth
    // 2.content的宽度
    const contentWidth = contentRef.current?.clientWidth as number
    const contentScroll = contentRef.current?.scrollWidth as number
    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.特殊情况的处理
    if (distance < 0) distance = 0 // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

    // 5.改变位置即可
    if (contentRef.current) {
      contentRef.current.style.transform = `translate(${-distance}px)`
    }
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
}

// Indicator.propTypes = {
//   selectIndex: PropTypes.number
// }

export default memo(Indicator)
