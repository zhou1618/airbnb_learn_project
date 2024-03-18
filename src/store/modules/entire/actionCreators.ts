import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

// 异步action类型声明
// import { ThunkAction } from 'redux-thunk'
// import type { Dispatch, AnyAction } from 'redux'
// import type { IRootState } from '@/store'
import type { Dispatch } from 'redux'

export const changeCurrentPageAction = (currentPage: number) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList: any) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount: number) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading: boolean) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

// 使用了ThunkAction类型来定义fetchRoomListAction函数的类型
// ThunkAction的泛型参数依次为返回类型(void)，根状态类型(RootState)，额外参数类型(unknown)，以及派发的action类型(AnyAction)
// export const fetchRoomListAction = ( page = 0 ): ThunkAction<void, IRootState, unknown, AnyAction> => {
export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  // dispatch: Dispatch, getState: IRootState
  return async (dispatch: Dispatch) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page))

    // 1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))

    // 2.获取到最新的数据, 保存redux的store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
