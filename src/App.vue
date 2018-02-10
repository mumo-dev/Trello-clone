<template>
  <div class="container">
     <div class="text-center mt-2">
          <img src="src/assets/logo.png" alt="" width="100px" height="100px"
          title="Click to go back home"
          @click="goHome">

          <button class="btn btn-success float-right mt-5" @click="clearBoards">Clear Boards</button>
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    goHome(){
      this.$router.push({name:'home'});
    },
    clearBoards(){
      window.localStorage.removeItem('boards');
      this.$store.dispatch('setBoards',[]);
      this.goHome();
    }
  },
  created(){
   const board = JSON.parse(window.localStorage.getItem('boards'));
   if(board){
     this.$store.dispatch('setBoards', board);
   }
  }
}
</script>
<style>
   body{
     background-color: #fcfafa;
   }
</style>


