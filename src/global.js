/**
 * Created by kevin on 16-4-6.
 */
const utils = {
    getCurrentScroll(){
        return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
    autoHideNavBar(){
        let lastScrollTop = 0, delta = 5;
        //const target = document.getElementsByClassName('u-navinfo')[0];
        window.addEventListener('scroll', e=> {
            const st = this.getCurrentScroll();
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
}
export default function () {
    Object.assign(window, utils);
}