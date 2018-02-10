<template>
<div>
  <div class="row" >
    <div class="col-5">
      <div class="card" id="card">
        <div class="card-body">
          <h4>{{ boardName }}</h4>
        </div>

      </div>
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col-sm-6 col-md-4 mb-4" v-for="(subBoard, index) in subBoards" :key="index">
       <app-sub-board
        :ind ="index"
        :board="subBoard"
        :id = "$route.params.id"
        ></app-sub-board>
    </div>
    <div class="col-sm-6 col-md-4">

          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h4 class="text-primary">Add sub-board</h4>
              </div>
              <div class="card-text">
                  <input type="text" v-model="subboard" @keyup.enter="addSubBoard" class="form-control">
              </div>
            </div>
          </div>

    </div>
  </div>
</div>
</template>
<script>
  import SubBoard from './SubBoard.vue'

  export default {
    components:{
       'app-sub-board': SubBoard
    },
    data(){
      return {
        subboard:"",
      }
    },
    methods:{
        addSubBoard(){
          const data ={
            index: this.$route.params.id,
            subBoardName: this.subboard
          };
         if(this.subboard){
             this.$store.dispatch('addSubBoard', data);
             this.subboard="";
         }

        },

    },

    computed:{
      boards(){
         return this.$store.getters.boards;
       },
      subBoards(){
        if(this.boards)
           return this.boards[this.$route.params.id].subBoards;
      },

      boardName(){
        if(this.boards)
           return this.boards[this.$route.params.id].name;
      }
    }
  }
</script>
<style scoped>
   #card{
     background:aqua;
   }
</style>


