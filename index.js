import debounce from "./lib/debounce"
import throttle from "./lib/throttle"
import deepClone from "./lib/deepClone"
import deeepMerge from "./lib/deepMerge"
import arrayShuffle from "./lib/arrayShuffle"
import timeFormat from "./lib/timeFormat"
import checkType from "./lib/checkType"


const func = {
    install (Vue, options) {
        Vue.prototype.$debounce = debounce
        Vue.prototype.$throttle = throttle
        Vue.prototype.$deepClone = deepClone
        Vue.prototype.$deepMerge = deeepMerge
        Vue.prototype.$arrayShuffle = arrayShuffle
        Vue.prototype.$timeFormat = timeFormat
        Vue.prototype.$checkType = checkType
    }
}

export default func


