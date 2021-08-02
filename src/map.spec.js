mapf = require('./map');

describe('Map',()=>{

    it('map([],cube) returns []',()=>{
        expect(mapf([],'cube')).toEqual([]);
    })

    it('map([1,2,3],cube) returns []',()=>{
        expect(mapf([1,2,3],'cube')).toEqual([1,8,27]);
    })

    it('map([1,2,3],identity) returns []',()=>{
        expect(mapf([1,2,3],'dentity')).toEqual([1,2,3]);
    })
})