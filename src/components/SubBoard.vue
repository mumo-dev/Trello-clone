<template>
  <div class="card">
      <span class="close" @click="close">x</span>

      <div class="card-body">
        <div class="card-title">
          <h4 class="text-primary">{{ board.name}}

          </h4>
        </div>

        <div class="card-text">
            <input type="text" v-model="content" @keyup.enter="addSubBoardContent" class="form-control mb-1">

            <ul class="list-group">
              <li class="list-group-item" v-for="cont in board.content" :key="cont">
                  {{ cont }}
              </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:['ind','board','id'],

    data(){
      return {
        content:''
      }
    },

    methods:{
       addSubBoardContent(){
          const data={
            index: this.id,
            subBoardIndex:this.ind,
            content: this.content
          };
          // console.log(data);
          if(this.content){
             this.$store.dispatch('addSubBoardContent', data);
             this.content="";
          }

        },
        close(){
          const data ={
            index:this.id,
            subBoardIndex:this.ind
          };
          this.$store.dispatch('removeSubBoard',data);
        }
    }
  }
</script>
<style scoped>
  .card{
    position: relative;
  }
  .close{
    position: absolute;
    top:4px;
    right:4px;
    font-size: 18px;
    font-weight: 50;
    color:red;
    padding:4px;
    cursor: pointer;
  }
  .close:hover{
    background: red;
    color:whitesmoke;
    border-radius: 2px;
  }
</style>


