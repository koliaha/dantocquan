import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    itemList: [],
    itemFilterList: [],
    category: 'all',
    categoryList: [
      {
        id: "all",
        name: "Все",
      },
      {
        id: "pho_bun",
        name: "Супы",
      },
      {
        id: "xao",
        name: "Вок",
      },
      {
        id: "bun",
        name: "Лапша",
      },
      {
        id: "nom",
        name: "Салат",
      },
      {
        id: "com",
        name: "Рис",
      },
      {
        id: "do_an_nhe",
        name: "Закуски",
      },
      {
        id: "do_ngot",
        name: "Сладкое",
      },
      {
        id: "cafe_tra",
        name: "Кафе и Чай",
      },
      {
        id: "sinh_to",
        name: "Смуши шейк",
      },
      {
        id: "lon_chai",
        name: "Газировка",
      },
      {
        id: "combo_lunch",
        name: "Комбо Обед",
      },
      {
        id: "dtq",
        name: "Особые",
      },
    ],
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
    async GET_DATA_API({ commit }) {
      await axios
        .get(
          "https://script.google.com/macros/s/AKfycbxP2ychaEYefQ9p_V9liFboUH3Y5CiJsB_ujT5zcjSeQCz0GC6obZh7ECio0ulK2X1y/exec"
        )
        .then((el) => {
          commit("SET_DATA", el.data);
        });
    },
  },
  modules: {},
});
