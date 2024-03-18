import SearchTitles from '@/assets/data/search_titles.json'

const searchInfos = SearchTitles[0].searchInfos[0]

type ISearchInfosItem = typeof searchInfos

export type ISearchInfo = ISearchInfosItem[]
