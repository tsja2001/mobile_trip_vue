import { getHomeHotSuggests } from '@/services/modules/home'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: []
    }
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})
