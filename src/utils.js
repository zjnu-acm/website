/**
 * Created by kevin on 16-4-6.
 */

let getCurrentScroll = () => {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}

export function autoHideNavBar() {
    let lastScrollTop = 0, delta = 5;
    //const target = document.getElementsByClassName('u-navinfo')[0];
    window.addEventListener('scroll', e=> {
        const st = getCurrentScroll();
        if (Math.abs(lastScrollTop - st) <= delta)return;
        if (st > lastScrollTop) {
            //downscroll
            document.body.classList.add('f-hide-nav');
        } else {
            //upscroll
            document.body.classList.remove('f-hide-nav');
        }
        lastScrollTop = st;
    })
}


export function getQueryString(query) {
    return Object.keys(query)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
        .join("&")
        .replace(/%20/g, "+");
}

/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
function mergeDeepTwo(target, source) {
    console.log(target,source);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: {}});
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        });
    }
    return target;
}

export function mergeDeep(target,...sources){
    sources.forEach(source=>{
        mergeDeepTwo(target,source);
    })
    return target;
}