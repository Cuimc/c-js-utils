/**
 * 节流
 * 作者 cuimc
 * @param {*} fun 要执行的回调函数
 * @param {*} dalay 延时时间 默认500ms
 * @param {*} first 是否一开始就执行一次
 * 
 * 原理: 
 * 1.设置标识flag
 * 2.当函数执行时将flag设为false
 * 3.当函数执行结束时将flag设置为true
 */

let timer, flag;
export default function throttle(fun, delay = 500, first = true) {
    if(first){
        if(!flag){
            flag = true;
            typeof fun === "function" && fun()
            timer = setTimeout(() => {
				flag = false;
			}, delay);
        }
    }else{
       if(!flag){
            flag = true;
            typeof fun === "function" && fun()
            timer = setTimeout(() => {
				flag = false;
				typeof fun === 'function' && fun();
			}, delay);
        }
    }
}