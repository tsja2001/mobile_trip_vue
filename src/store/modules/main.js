import { defineStore } from 'pinia'

const startDate = new Date()
const endDate1 = startDate.setDate(startDate.getDate() + 1)

// dateTime=dateTime.setDate(dateTime.getDate()+1);

const endDate = new Date(
  startDate.getTime() + 24 * 60 * 60 * 1000
)

export const useMainStore = defineStore('main', {
  state() {
    return {
      startDate: startDate,
      endDate: endDate
    }
  }
})
