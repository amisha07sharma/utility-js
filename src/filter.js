const filter = (arr,x) => {
    if (x == true){
        return arr;
    }
    if (x == false){
        return [];
    }
    if (x == 'x>1'){
        t = [];
        for (let index = 0; index < arr.length; index++) {
            if(arr[index]>1){
                t.push(arr[index]);
            }
        }
        return t;
    }
    if (x == 'filterUpperCase'){
        arr = arr.join("");
        t = [];
        for (let index = 0; index < arr.length; index++) {
            if(65 <= arr.codePointAt(index) && arr.codePointAt(index) <= 90){
                t.push(arr.charAt(index));
            }
        }
         return t; 
    }
}

module.exports = filter;