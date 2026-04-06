class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        for(let i =0; i < t.length; i++){
            s = s.replace(t[i] ,"")
        }
        if(s.length !== 0) return false
        else return true
    } 
}
