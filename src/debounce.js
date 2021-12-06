/**
 * 防抖
 * 作者 cuimc
 * @param {*} fun 要执行的回调函数
 * @param {*} dalay 延时时间 默认500ms
 */

let timer = null;
export default function debounce(fun, dalay = 500){
    // 判断timer是否存在 存在就给他清除掉
	if (timer !== null) clearTimeout(timer);
    // 不存在就给它设定定时器,去执行func函数
	timer = setTimeout(function() {
		typeof fun === 'function' && fun();
	}, dalay);
}