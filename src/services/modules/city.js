import tsjaRequest from '@/services/request'

export const getCityAll = () => {
  return tsjaRequest.get({
    url: '/city/all'
  })
}
