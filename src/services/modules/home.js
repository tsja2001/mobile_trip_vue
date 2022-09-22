import tsjaRequest from '@/services/request'

export function getHomeHotSuggests() {
  return tsjaRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getCategories() {
  return tsjaRequest.get({
    url: '/home/categories'
  })
}

export function getHouseListData(currentPage) {
  return tsjaRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}
