class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let arr = []

        for(let char of s ){
            if(char === '{' || char === '('|| char === '['){
                arr.push(char)
            }

            else{

                let prev = arr.pop()
                if(prev === '{' && char !== '}') return false
                if(prev === '(' && char !==  ')') return false
                if(prev ===  '[' && char !== ']') return false
                if(prev === undefined) return false
            }
        }
        return arr.length === 0
    }
}
