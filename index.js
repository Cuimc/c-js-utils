import debounce from "./lib/debounce"
import throttle from "./lib/throttle"
import deepClone from "./lib/deepClone"
import deeepMerge from "./lib/deepMerge"
import arrayShuffle from "./lib/arrayShuffle"
import timeFormat from "./lib/timeFormat"


const func = {
    install (Vue, options) {
        Vue.prototype.$debounce = debounce
        Vue.prototype.$throttle = throttle
        Vue.prototype.$deepClone = deepClone
        Vue.prototype.$deepMerge = deeepMerge
        Vue.prototype.$arrayShuffle = arrayShuffle
        Vue.prototype.$timeFormat = timeFormat
    }
}

export default func


