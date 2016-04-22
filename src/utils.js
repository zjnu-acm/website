/**
 * Created by kevin on 16-4-6.
 */
import path from 'path';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
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
            document.body.classList.add('f-hide-appbar');
        } else {
            //upscroll
            document.body.classList.remove('f-hide-appbar');
        }
        lastScrollTop = st;
    })
}


export function getQueryString(query) {
    if (isObject(query) === false)return '';
    return '?' + Object.keys(query)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
            .join("&")
            .replace(/%20/g, "+");
}

const prefix = 'api/';
export function request(req) {
    if (req.url[req.url.length - 1] === '/') {
        req.url = req.url.substr(0, req.url.length - 1);
    }
    const url = path.join(prefix, req.url + getQueryString(req.query));
    const token = cookie.get('token');
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/json');
    myHeaders.append('Accept-Language', 'zh-cn,zh');
    var myInit = Object.assign({
        method: 'GET',
        headers: myHeaders,
        //mode: 'cors',
        cache: 'default'
    }, req);
    return fetch(url, myInit).then(response=> {
        if (!response.ok)logger({
            file: 'utils',
            line: '48',
            type: 'warn'
        }, 'fetch failed,status:', response.status, response.statusText);
        return response.json();
    });
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

export function mergeDeep(target, ...sources) {
    sources.forEach(source=> {
        mergeDeepTwo(target, source);
    })
    return target;
}