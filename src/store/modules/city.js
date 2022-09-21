import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

export const useCityStore = defineStore('city', {
  state() {
    return {
      allCities: [],
      currentCity: {
        cityId: 66,
        cityName: '天津',
        pinYin: 'tianjin',
        gangAoTai: false,
        hot: false,
        longitude: '117.188',
        latitude: '39.1359'
      }
    }
  },
  actions: {
    getCityAllData() {
      getCityAll()
        .then((res) => {
          this.allCities = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
