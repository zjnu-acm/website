/**
 * Created by kevin on 16-4-6.
 */
const utils = {
    verdict: {
        Running: 'Running',
        Pending: 'Pending',
        Accepted: 'Accepted',
        WrongAnswer: 'Wrong Answer',
        PresentationError: 'Presentation Error',
        TimeLimitExceeded: 'Time Limit Exceeded',
        MemoryLimitExceeded: 'Memory Limit Exceeded',
        OutputLimitExceeded: 'Output Limit Exceeded',
        ComplicationError: 'Complication Error',
        RuntimeError: 'Runtime Error'
    },
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