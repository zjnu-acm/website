/**
 * Created by kevin on 16-4-6.
 */
import path from 'path';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import leftPad from 'left-pad';
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
            .map((key) => {
                if (Array.isArray(query[key])) {
                    return query[key].reduce((prev, now)=>
                    '&' + prev + encodeURIComponent(key) + '=' + encodeURIComponent(now), '').substr(1)
                }
                return encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
            })
            .join("&")
            .replace(/%20/g, "+");
}
//https://github.com/danieldram/serialize-for-xhr/blob/master/serialize-for-xhr.js
export function serialize(obj, prefix) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push(typeof v == "object" ?
                serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&").replace(/%20/g, "+");
}

const prefix = '/api';
export function request(req) {
    const queryStr = serialize(req.query);
    if (queryStr.length)req.url = req.url.match(/\S*[^\/]/) + '?' + queryStr;
    const url = path.join(prefix, req.url);
    var myHeaders = new Headers();
    //myHeaders.append('Content-Type', 'text/json');
    myHeaders.append('Accept-Language', 'zh-cn,zh');
    if (typeof req.body === 'object') {
        const form = new FormData();
        for (let key in req.body) {
            form.append(key, req.body[key]);
        }
        req.body = form;
    }
    var myInit = Object.assign({
        method: 'GET',
        headers: myHeaders,
        //mode: 'cors',
        cache: 'default',
        credentials: 'include'//带上http cookie
    }, req);
    return fetch(url, myInit).then(response=> {
        return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
        });
    });
}


/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
    return (!!item && typeof item === 'object' && !Array.isArray(item) && item !== null);
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

export function parseDateTime(date) {
    if (obj.isString(date))date = Date.parse(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, leftPad(month, 2, 0), leftPad(day, 2, 0)].join('-') + ' '
        + [leftPad(hour, 2, 0), leftPad(minute, 2, 0), leftPad(second, 2, 0)].join(':');
}
/**
 * 获得两个日期之间的差，并format为('{d}day hh:mm:ss')格式
 * @constructor
 */
export function DateSubtract(date1, date2) {
    if (!obj.isDate(date1))date1 = new Date(date1);
    if (!obj.isDate(date2))date2 = new Date(date2);
    if (date1 < date2) {
        const date3 = date1;
        date1 = date2;
        date2 = date3;
    }
    let delta = date1.getTime() - date2.getTime();
    const one = {
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000
    }
    let day = '';
    if (delta >= one.day) {
        day = Math.floor(delta / one.day);
        delta -= day * one.day;
        day = day + 'day ';
    }
    const hour = Math.floor(delta / one.hour);
    delta -= hour * one.hour;
    const minute = Math.floor(delta / one.minute);
    delta -= minute * one.minute;
    const second = Math.floor(delta / one.second);
    return day + [hour, minute, second].map(num => leftPad(num, 2, 0)).join(':');
}

var isType = function (name) {
    return function (v) {
        return Object.prototype.toString.call(v) === '[object ' + name + ']';
    }
}
export const obj = {
    isNumber: isType('Number'),
    isObject: isType('Object'),
    isFunction: isType('Function'),
    isString: isType('String'),
    isUndefined: isType('Undefined'),
    isBoolean: isType('Boolean'),
    isArray: isType('Array'),
    isNull: isType('Null'),
    isDate: isType('Date'),
    isUndefinedorNull: function (v) {
        return this.isNull(v) || this.isUndefined(v);
    }
}