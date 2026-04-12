class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let left =0
        let maxLen =0

        for(let ri =0;ri <s.length; ri++){

            while(set.has(s[ri])){
                set.delete(s[left])
                left++
            }
            set.add(s[ri])
            maxLen = Math.max(maxLen, ri - left + 1)
        }
        return maxLen
    }
}
