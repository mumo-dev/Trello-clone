import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    boards:[]
  },
  mutations:{
       'SET_BOARDS'(state, payload){
          state.boards = payload;
       },
      'ADD_BOARD'(state,payload){
        // payload = name alone;
        state.boards.push({
          name:payload,
          subBoards:[]
        });

        window.localStorage.setItem('boards', JSON.stringify(state.boards));

      },
      'ADD_SUB_BOARD'(state,payload){
        // { expected payload object structure
        //   index:'',
        //   subBoardName:''
        // }
          const index = payload.index; //index of the board to add subboard

          //add the sub-board
          const subboard = {
             name: payload.subBoardName,
             content:[]
          };
          state.boards[index].subBoards.push(subboard);

          window.localStorage.setItem('boards', JSON.stringify(state.boards));
      },
      'ADD_SUB_BOARD_CONTENT'(state, payload){
        // { expected payload object structure
        //   index:'',
        //   subBoardIndex:''
        //    content:''
        // }

          state.boards[payload.index].subBoards[payload.subBoardIndex].content.push(payload.content);
          window.localStorage.setItem('boards', JSON.stringify(state.boards));

        },
        'REMOVE_SUB_BOARD'(state, {index,subBoardIndex}){
          state.boards[index].subBoards.splice(subBoardIndex,1);
          window.localStorage.setItem('boards', JSON.stringify(state.boards));
        }
  },
  actions:{
    addBoard:({commit},payload)=>{
      commit('ADD_BOARD',payload);
    },
    addSubBoard:({commit},payload)=>{
      commit('ADD_SUB_BOARD',payload);
    },
    addSubBoardContent:({commit},payload)=>{
      commit('ADD_SUB_BOARD_CONTENT',payload);
    },
    setBoards:({commit}, data)=>{
      commit('SET_BOARDS',data);
    },
    removeSubBoard:({commit},data)=>{
      commit('REMOVE_SUB_BOARD',data);
    }

  },
  getters:{
      boards(state){
         return state.boards;
      }
  },
})


