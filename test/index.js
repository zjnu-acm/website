const expect = require('chai').expect;
import {serialize} from '../src/utils';
describe('fetch', function () {
    before(function () {
        console.log('test fetch api');
    });
    describe('serialize', function () {
        it('normal url', function () {
            expect(serialize({a:'what',b:'the',c:'fuck'})).to.equal('a=what&b=the&c=fuck')
        });
        it('object url',function(){
            expect(serialize({a:'what',b:{c:'fuck'}})).to.equal('a=what&b%5Bc%5D=fuck')
        });
        it('array url',function(){
            expect(serialize({a:'what',b:[1,2,3,4]})).to.equal('a=what&b%5B0%5D=1&b%5B1%5D=2&b%5B2%5D=3&b%5B3%5D=4')
        })
    });
});