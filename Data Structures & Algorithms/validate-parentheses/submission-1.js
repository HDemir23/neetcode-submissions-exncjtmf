class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = []

        let bracks = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }


        for( let a of s){
            if(bracks[a]){
                if(
                    arr.length > 0 && arr[arr.length -1] === bracks[a])
                    {
                        arr.pop()
                    }else{ return false}
                
            }else {arr.push(a)}
        }return arr.length === 0
    }
}
