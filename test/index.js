const expect = require('chai').expect;
import {serialize, DateSubtract} from '../src/utils';
describe('fetch', function () {
    before(function () {
        console.log('test fetch api');
    });
    describe('serialize', function () {
        it('normal url', function () {
            expect(serialize({a: 'what', b: 'the', c: 'fuck'})).to.equal('a=what&b=the&c=fuck')
        });
        it('object url', function () {
            expect(serialize({a: 'what', b: {c: 'fuck'}})).to.equal('a=what&b%5Bc%5D=fuck')
        });
        it('array url', function () {
            expect(serialize({
                a: 'what',
                b: [1, 2, 3, 4]
            })).to.equal('a=what&b%5B0%5D=1&b%5B1%5D=2&b%5B2%5D=3&b%5B3%5D=4')
        })
    });
});

describe('utility', function () {
    describe('DateTimeOpts', function () {
        it('compare date', function () {
            const date1 = new Date('2016-2-22');
            const date2 = new Date('2016-2-20');
            expect(DateSubtract(date1, date2)).to.equal('2day 00:00:00')
        })
        it('compare hour',function(){
            const date1 = new Date('2016/12/1 12:00:00');
            const date2 = new Date('2016/12/1 17:00:00');
            expect(DateSubtract(date1, date2)).to.equal('05:00:00')
        })
    })
})