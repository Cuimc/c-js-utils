/**
 * 数组洗牌
 * 作者 cuimc
 * @param {*} array 要处理的数组
 */

function arrayShuffle(array){
    // slice不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组
    let newArr = array.slice();
    for(let i = 0; i < newArr.length; i++){
        const j = getRandomIndex(i);
        upset(newArr, i, j)
    }
    return newArr;
}

function getRandomIndex(maxIndex){
    /**
     * Math.floor() 向下取整
     * Math.random() 是 0->1的随机数 (包括0 但 不包括1);
     * 所以这里的index 要进行 加1 处理
     * 这样就能取得 0 -> index 之间的随机值
     */
    return Math.floor(Math.random() * (maxIndex + 1))
}

// 将数组中的两个数据进行交换
function upset(arr, i, j){
    const s = arr[i];
    arr[i] = arr[j];
    arr[j] = s;
}

export default arrayShuffle