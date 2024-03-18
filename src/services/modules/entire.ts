import hyRequest from '..'

// 获取全部房间列表
export function getEntireRoomList(offset = 0, size = 20) {
  return hyRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
