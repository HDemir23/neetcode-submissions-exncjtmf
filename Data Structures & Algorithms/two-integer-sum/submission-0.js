class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = new Map()

            for(let i=0; i< nums.length; i++){
                const diff = target - nums[i]
                if(arr.has(diff)){
                    return [arr.get(diff),i]
                }

                arr.set(nums[i], i)
            }
        return []
    }
}
