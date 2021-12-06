/**
 * 深度克隆
 * 作者 cuimc
 * @param {*} obj 要克隆的对象
 *
 * Object.prototype.hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
 * 例子:
 * const object = {};
 * object.property = 42;
 * console.log(object.hasOwnProperty('property'));  -> true
 * console.log(object.hasOwnProperty('toString'));  -> false
 */ 

function isArray (arr) {
    return Object.prototype.toString.call(arr) === "[object Array]"
}
function isObject (obj) {
    const type = typeof obj; 
    return obj != null && (type === 'object' || type === 'function');
}

function deepClone (obj) {
    // 对常见的“非”值，直接返回原来值
    if([null, undefined, NaN, false].includes(obj)) return obj;
    // 原始类型直接返回
    if( !isObject(obj) ){
        return obj
    }
    let o = isArray(obj) ? [] : {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i]
        }
    }
    return o
}

export default deepClone;
