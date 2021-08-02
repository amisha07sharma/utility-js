const filter = require('./filter');

describe('Filter',()=>{

    it('filter',()=>{
        expect(filter([],true)).toEqual([]);
    });

    it('filter',()=>{
        expect(filter([1,2,3],true)).toEqual([1,2,3]);
    });

    it('filter',()=>{
        expect(filter([1,2,3],false)).toEqual([]);
    });

    it('filter',()=>{
        expect(filter([1,2,3],'x>1')).toEqual([2,3]);
    });

    it('filter',()=>{
        expect(filter(['a','B','c','D'],'filterUpperCase')).toEqual(['B','D']);
    });
})