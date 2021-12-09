/**
 * 时间戳转时间格式
 * 作者 cuimc
 * @param {*} timestamp 要处理的时间戳
 * @param {*} fmt 要改变的格式
 */

function timeFormat(timestamp = null, format = 'yyyy-mm-dd'){
    timestamp = parseInt(timestamp)
        if(!timestamp) {
            timestamp = Number(new Date())
        }
        // 判断时间戳是秒还是毫秒
        if(timestamp.toString().length === 10){
            timestamp *= 1000;
        }
        let date = new Date(timestamp);
        let ret;
        let option = {
          "yyyy": date.getFullYear().toString(),
          "mm": (date.getMonth() + 1).toString(),
          "dd": date.getDate().toString(),
          "hh": date.getHours().toString(),
          "MM": date.getMinutes().toString(),
          "ss": date.getSeconds().toString()
        };
        
        for(let key in option){
            ret = new RegExp("(" + key + ")").exec(format);
            if(ret){
                format = format.replace(ret[1], 
                  ret[1].length == 1 ? option[key] : option[key].padStart(ret[1].length, 0) 
                )
            }
        }
        return format
}

export default timeFormat;
