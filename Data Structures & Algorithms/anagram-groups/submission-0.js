class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr = new Map()
        for(let i =0; i < strs.length; i++){
            let word = strs[i]

            let sorted = word.split("").sort().join("")

            if(arr.has(sorted)){
                arr.get(sorted).push(word)
            }else {
                arr.set(sorted, [word])
            }
        }
        return Array.from(arr.values())
    }
}
