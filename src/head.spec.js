const head = require('./head');

describe('Head',() => {

    test('Head of [1,2,3,4,5] is 1',()=>{
        expect(head([1,2,3,4,5])).toEqual(1);
    });

    it('Head of [] is Null',()=>{
        expect(head([])).toEqual(null);
    });

})
