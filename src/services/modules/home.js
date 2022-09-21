import tsjaRequest from '@/services/request'

export function getHomeHotSuggests() {
  return tsjaRequest.get({
    url: '/home/hotSuggests'
  })
}
