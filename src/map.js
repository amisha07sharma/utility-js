const mapf = (arr,fn)=>{
    if (fn == 'cube') {
        return arr.map(cube);
    }
    return arr;
}

const cube = (a)=>{return (a*a*a);}
module.exports = mapf;