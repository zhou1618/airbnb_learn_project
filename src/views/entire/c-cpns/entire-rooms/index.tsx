import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/store'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = () => {
  /** 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useAppSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqualApp
  )

  /** 事件处理 */
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const itemClickHandle = useCallback(
    (item: any) => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item: any) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClickHandle}
            />
          )
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
}

export default memo(EntireRooms)
