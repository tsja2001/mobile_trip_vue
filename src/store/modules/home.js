import {
  getCategories,
  getHomeHotSuggests,
  getHouseListData
} from '@/services/modules/home'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: [],
      houseListData: [],
      currentPage: 1
    }
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseListData(this.currentPage)
      this.houseListData.push(...res.data)
      this.currentPage++
    }
  }
})
