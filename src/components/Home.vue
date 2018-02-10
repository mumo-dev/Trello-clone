<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 mb-4">
       <div id="card" class="card" style="background:aqua">
          <app-card @click.native="displayCreateForm = !displayCreateForm">
             <h4 title=" click to create a board">Create a board</h4>
          </app-card>
          <create-board v-if="displayCreateForm" :display="1"></create-board>
       </div>
    </div>

    <!-- other boards to the left -->
    <div class="col-sm-6 col-md-4 mb-4" v-for="(board, index) in boards" :key="index"  @click="gotoBoard(index)">
         <div class="card">
           <app-card>
             <h4> {{ board.name }}</h4>
           </app-card>
         </div>
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue'
  import CreateBoard from './CreateBoard.vue'
  export default {
    components:{
      'app-card':Card,
      'create-board':CreateBoard
    },
    data(){
      return{
        displayCreateForm:false
      }
    },
    computed:{
      boards(){
        return this.$store.getters.boards;
      }
    },
    methods:{
      gotoBoard(index){
        this.$router.push({ path: '/boards/'+index});
        // console.log(index);
      }
    }


  }
</script>
<style scoped>
   h4 {
     cursor: pointer;
   }
</style>




