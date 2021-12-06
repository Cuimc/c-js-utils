# c-js-utils
### 简介
在公司工作的过程中, 由于公司业务的问题, 出现了很多类似的逻辑功能, 由此出现了很多相似的方法, 于是把他封装出来供自己以后使用, 也方便公司代码的维护.  
目前封装出来的方法不多, 以后也会继续维护添加新的方法.

### 现有的方法
- 节流
- 防抖
- 深度拷贝
- 深度合并

### 如何使用
vue2
```javescript
// 首先安装
npm install --save c-js-utils 
or
cnpm install --save c-js-utils 


// main.js中添加代码
import func from c-js-utils
Vue.use(func)
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
