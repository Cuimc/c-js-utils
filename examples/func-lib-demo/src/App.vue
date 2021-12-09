<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>测试方法</h2>
    <button @click="debounce">debounce</button>
    <button @click="throttle">throttle</button>
    <button @click="deepClone">deepClone</button>
    <button @click="deepMerge">deepMerge</button>
    <button @click="shuffle">Shuffle</button>
    <button @click="timeFormat">timeFormat</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    debounce(){
      this.$debounce(()=>{
        console.log("debounce")
      }, 500)
    },
    throttle(){
      this.$throttle(() => {
        console.log("throttle");
      },2000)
    },
    deepClone(){
      let obj = {
        arr: [
          {name: 1},
          {name: 2},
          {name: 3}
        ],
        obj: {
          arr: [
            {name: 1},
            {name: 2},
            {name: 3}
          ]
        }
      };

      let objClone = this.$deepClone(obj);
      objClone.obj.arr[1].name = "name";
      console.log("objClone",objClone);
      console.log("obj",obj);
    },
    deepMerge(){
      let obj = {
        name: "name",
        ageObj: {
          age: 1,
          age2: 2,
          age3: {
            color: "red"
          }
        }
      }
      let obj2 = {
        color: "green",
        colorObj: {
          name: "123",
          serve: {
            name: "123123"
          }
        }
      }
      let assign = Object.assign(obj, obj2);
      let assign2 = this.$deepMerge(obj, obj2)

      obj.ageObj.age = "啊实打实大"
      console.log("obj", obj)
      console.log("assign", assign)
      console.log("assign2", assign2)
    },
    shuffle(){
      // let array = [1,2,3,4,5,6,7,8,9]
      let array = [
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
        {name: 5}
      ]
      let newarr = this.$arrayShuffle(array)
      console.log(newarr);
    },
    timeFormat(){
      console.log(this.$timeFormat(1638117622776, "yyyy/mm/dd hh:MM"));
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  display: block;
  margin: 0 auto;
}
</style>
