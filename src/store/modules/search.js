import {defineStore} from "pinia";

export const useSearchStore = defineStore("city", {
	state() {
		return {
			citys: [],
		};
	},
	actions: {},
});
