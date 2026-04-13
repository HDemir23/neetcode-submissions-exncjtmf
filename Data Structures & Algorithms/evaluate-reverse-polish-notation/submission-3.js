class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = []

        let ops ={
            "+" : (a,b) => a+b,
            "-" : (a,b) => a-b,
            "*" : (a,b) => a*b,
            "/" : (a,b) => Math.trunc(a /b)
        }

        for(let i of tokens){
            if(i in ops){
                let b = arr.pop()
                let a = arr.pop()
                arr.push(ops[i](a,b))
            }else{
                arr.push(Number(i))
            }
        }
        return arr[0]
    }
}
