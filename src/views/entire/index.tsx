import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
// import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  // 发送网络请求, 获取数据, 并且保存当前的页面等等.....
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    // dispatch(fetchRoomListAction(0))
    // 处理头部配置信息
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
}

export default memo(Entire)