<template>
    <div class="card" v-show="showDisplay">
        <div class="card-body">
          <div class="card-text">
             <p>What shall we call the board</p>
            <input type="text" class="form-control" v-model ="boardName" @keyup.enter="addBoard">
            <div class="mb-2"></div>
            <button class="btn btn-default float-left" @click="showDisplay=0">Cancel</button>
            <button class="btn btn-primary float-right" @click="addBoard">Create</button>
          </div>
        </div>
    </div>
</template>
<script>
  export default {
    props:['display'],
    data(){
      return {
        boardName:'',
        showDisplay:''
      }
    },
    methods:{
      addBoard(){
        if(this.boardName){
          this.$store.dispatch('addBoard',this.boardName);
          this.boardName=''
        }

        this.showDisplay =0;
      }
    },
    created(){
      this.showDisplay = this.display;
    }

  }
</script>
<style scoped>

</style>

