class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let res = 0
        for(let n of set){

            if(!set.has(n -1)){
                let current = n
                let streak = 1
            

            while(set.has(current + 1)){
                current++
                streak++
            }
            
            res = Math.max(res, streak)
            }
        }return res
    }
}
