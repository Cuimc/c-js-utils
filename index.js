import debounce from "./lib/debounce"
import throttle from "./lib/throttle"
import deepClone from "./lib/deepClone"
import deeepMerge from "./lib/deepMerge"

const func = {
    install (Vue, options) {
        Vue.prototype.$debounce = debounce
        Vue.prototype.$throttle = throttle
        Vue.prototype.$deepClone = deepClone
        Vue.prototype.$deepMerge = deeepMerge
    }
}

export default func


