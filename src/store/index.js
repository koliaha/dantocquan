import { createStore } from "vuex";
import itemData from "@/assets/data/items.json";
import categories from "@/config/categories";
export default createStore({
  state: {
    itemList: [],
    itemFilterList: [],
    category: 'all',
    categoryList: categories,
  },
  getters: {
    getItemList(state) {
      return state.itemFilterList;
    },
    getCategoryList(state) {
      return state.categoryList;
    },
    getCategory(state) {
      return state.category;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.itemList = payload;
      state.itemFilterList = payload;
    },
    SET_CATEGORY(state, payload = 'all') {
      state.category = payload;
      if (payload != 'all') {
        state.itemFilterList = state.itemList.filter((el) => {
          return el.category == payload;
        });
      } else {
        state.itemFilterList = state.itemList;
      }
    },
  },
  actions: {
    GET_DATA_API({ commit }) {
      commit("SET_DATA", itemData);
    },
  },
  modules: {},
});
