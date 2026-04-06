class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let newarr = new Set(nums)

        if(nums.length !== newarr.size) return true 
        return false
    }
}
