/**
 * 深度合并
 * 作者 cuimc
 * @param {*} target 合并目标对象
 * @param {*} source 合并源对象
 */ 

import deepClone from "./deepClone"

function deepMerge(target = {}, source = {}){
    // 深度克隆, 不改变原数据
    target = deepClone(target);
    // 首先确保是Object类型
    if(typeof target !== "object" || typeof source !== "object") return false;
    // 对源对象遍历
    for(let key in source){
        // 如果源对象中不包含这个值则跳出此次循环
        if(!source.hasOwnProperty(key)) continue;
        /**
         * in 操作符
         * 如果指定的属性在指定的对象或其原型链中，则in运算符返回true。
         */
        if(key in target){
            if(typeof target[key] !== "object"){  // 如果值不是Object的话就是普通值, 可以直接复制
                target[key] = source[key]
            } else { // 如果是object 就需要再对source的key进行类型判断
                if(typeof source[key] !== "object"){ 
                    target[key] = source[key]
                }else{
                    if(target[key].concat && source[key].concat){  // 查看源对象的key属性是不是数组, 是数组直接合并
                        target[key] = target[key].concat(source[key])
                    }else{  // 是object的话 就递归
                        target[key] = deepMerge(target[key], source[key]);  
                    }
                }
            }
        } else {
            // target中没有key属性的话直接赋值
            target[key] = source[key]
        }
    }
    return target;
}

export default deepMerge

