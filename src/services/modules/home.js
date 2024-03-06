import hyRequest from "..";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}


export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

// 获取折扣数据
export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

// 获取热门评论
export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}

// 获取plus数据
export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}
