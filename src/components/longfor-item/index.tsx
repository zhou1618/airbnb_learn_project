import PropTypes from 'prop-types'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const LongforItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
}

LongforItem.propTypes = {
  itemData: PropTypes.object
}

export default memo(LongforItem)
