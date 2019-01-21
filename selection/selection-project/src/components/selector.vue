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
                     v-show="changes"
                     class="select-item"></select-sxy>
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
  }
  .back {
    display: inline-block;
    float: left;
    margin-left: 10px;
  }
  .gongdan {
    left: 17%;
    margin-top: 10px;
    position: relative;
    width: 200px;
  }

  .gd_input {
    position: absolute;
    width: 100%;
    margin-left: 10px;
    outline: none;
  }
  .select-item {
    border: solid 0.5px;
    position: absolute;
    width: 100%;
    left: 17%;
    margin-left: 10px;
  }
  .text {
    margin-right: 20px;
  }
</style>
