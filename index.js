import debounce from "./lib/debounce"
import throttle from "./lib/throttle"
import deepClone from "./lib/deepClone"
import deeepMerge from "./lib/deepMerge"
import arrayShuffle from "./lib/arrayShuffle"
import timeFormat from "./lib/timeFormat"
import checkType from "./lib/checkType"


const func = {
    install (Vue, options) {
        // 获取版本号
        const version = Number(Vue.version.split('.')[0])
        if(version && version < 3){  // vue2版本
            Vue.prototype.$debounce = debounce
            Vue.prototype.$throttle = throttle
            Vue.prototype.$deepClone = deepClone
            Vue.prototype.$deepMerge = deeepMerge
            Vue.prototype.$arrayShuffle = arrayShuffle
            Vue.prototype.$timeFormat = timeFormat
            Vue.prototype.$checkType = checkType
        }else{   // vue3版本
            Vue.config.globalProperties.$debounce = debounce
            Vue.config.globalProperties.$throttle = throttle
            Vue.config.globalProperties.$deepClone = deepClone
            Vue.config.globalProperties.$deepMerge = deeepMerge
            Vue.config.globalProperties.$arrayShuffle = arrayShuffle
            Vue.config.globalProperties.$timeFormat = timeFormat
            Vue.config.globalProperties.$checkType = checkType
        }
    }
}

export default func


