import tsjaRequest from '@/services/request'

export function getDetailInfos(houseId) {
  return tsjaRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
