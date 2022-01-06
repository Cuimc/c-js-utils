### 简介
在公司工作的过程中, 由于公司业务的问题, 出现了很多类似的逻辑功能, 由此出现了很多相似的方法, 于是把他封装出来供自己以后使用, 也方便公司代码的维护.  
目前封装出来的方法不多, 以后也会继续维护添加新的方法.

### 现有的方法
- 节流
- 防抖
- 深度拷贝
- 深度合并
- 数组洗牌
- 时间戳转时间格式
- 判断数据类型

### 如何使用
目前兼容了Vue2 与 Vue3

```js
// 首先安装
npm install --save c-js-utils 
or
cnpm install --save c-js-utils 

// Vue2 
    // main.js中添加代码
    import func from c-js-utils
    Vue.use(func)

    // 然后再页面中就可以使用了
    this.$debounce(func)

// Vue3
    // main.js中添加代码
    import func from c-js-utils

    const app = createApp()
    app.use(func).mount("#app")

    // 由于vue3 与 vue2 的方法不同, 这里只介绍 composition Api 的用法
    import { getCurrentInstance } from "vue"
    export default {
        setup(){
            const { proxy } = getCurrentInstance()  // 将proxy解构出来   关键代码!!!
            proxy.$debounce(func)  // 使用方法
        }
    }
```

### 方法文档
- 节流
```javascript
    this.$debounce(function, dalay)
    
    // function 是要执行的函数
    // dalay 是延时时间,默认500
```
- 防抖
```javascript
    this.$throttle(function, dalay, first)
    
    // function 是要执行的函数
    // dalay 是延时时间,默认500
    // first 是否一开始就执行一次, 默认 true
```
- 深度拷贝
```javascript
    let data = this.$deepClone(data)
    
    // data 是要克隆的数据
```
- 深度合并
```javascript
    let data = this.$deepMerge(target, source)
    
    // target 是目标数据
    // source 是要合并进去的数据
```
- 数组洗牌
```javascript
    let newArray = this.$arrayShuffle(array)
    
    // array 是处理的数组
```
- 时间戳转时间格式
```javascript
    let time = this.$timeFormat(timeDate, "yyyy-mm-dd")
    
    // timeDate 时间戳
    // "yyyy-mm-dd" 是转化的时间格式
    yyyy => 年
    mm => 月
    dd => 日
    hh => 时
    MM => 分
    ss => 秒
    // 可以自由组合
```
- 判断数据类型
```javascript
    let type = this.$checkType(obj)
    
    // obj 是要判断的数据
    /**
     * 可供判断的数据类型
     * 'boolean',
     * 'number',
     * 'string',
     * 'function',
     * 'array',
     * 'date',
     * 'regExp',
     * 'undefined',
     * 'null',
     * 'object'
     */ 
```