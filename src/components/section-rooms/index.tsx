// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

interface IProps {
  children?: ReactNode
  roomList: any[]
  itemWidth: string
}

const SectionRooms: FC<IProps> = (props) => {
  const { roomList = [], itemWidth } = props

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
      })}
    </RoomsWrapper>
  )
}

// SectionRooms.propTypes = {
//   roomList: PropTypes.array
// }

export default memo(SectionRooms)
