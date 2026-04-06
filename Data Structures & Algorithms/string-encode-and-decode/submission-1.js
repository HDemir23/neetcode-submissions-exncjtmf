class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = ''
        for(let i=0; i < strs.length; i++){
            encoded_string +=  strs[i].length + "#" + strs[i] 
        } return encoded_string 
         
    } 

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let i = 0

        while(i < str.length){
            let stri = ""

        while (str[i] !== "#") {
            stri += str[i];
            i++;
        }
            i++

            let len = parseInt(stri);
            let ros = str.slice(i, i + len);
        arr.push(ros);
        i += len;
        }
        return arr
    }
}
