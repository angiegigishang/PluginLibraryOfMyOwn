<template>
  <div>
    <div class="header">
      <router-link to="/home">
        <div class="back"><</div>
      </router-link>
          选择
    </div>
    <div class="wrap-content">

      <div class="gongdan" @click="test2">
        选项
        <input class="gd_input" 
               placeholder="请选择" 
               @click="change()"
               v-model="val"
               >
        <select-sxy  @onchange="test" 
                     :data='moredata' 
                     v-show="changes"></select-sxy>
      </div>
      
      <div class="shebei"></div>
      <div class="shuliang"></div>
    </div>
  </div>  
</template>

<script>
import selectSxy from './base/selection'
export default{
  components: {
    selectSxy,
  },
  data () {
    return {
      datas:[1,2,3,4,5],
      changes: false,
      val: []
    }
  },
  computed: {
    moredata () {
      var more = [] 
        for(var i=0; i<50; i++){
            more.push(i);
        }
      return more
      }
    },
  methods: {
    test2 () {
      //console.log(this.moredata)
    },
    change () {
      this.changes = !this.changes
    },
    test (key) {
      this.val = key
      this.changes = false
    }
  },
  mounted () {
    //console.log(this.moredata)
    console.log('1',this.changes)
  }
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .header{
    position: relative;
    display: inline-block;
    background-color: #e6e6e6;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    vertical-align: center;
   /* position: relative;
    display: inline-block;
    height: 1.3rem;
    line-height: 1.3rem;
    width: 100%;
    background-color: #e6e6e6;
    text-align: center;
    vertical-align: center;
    color: #000;
    font-size: 0.4rem;*/
  }
  .back {
    display: inline-block;
   /* display: inline-block;
    position: absolute;
    left: 0.2rem;
    font-size: 0.5rem;
    text-align: center;
    color: #101010;*/
  }
  .gongdan {
    /*position: relative;
    margin: 10px auto;*/
  }
</style>
