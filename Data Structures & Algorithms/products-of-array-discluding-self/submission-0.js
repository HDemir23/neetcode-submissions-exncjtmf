class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let arr = new Array(n).fill(1)

        let left = 1
        for(let i = 0; i < n; i++){
            arr[i] = left
            left *= nums[i]
        }


        let right = 1
        for(let j = n- 1; j >= 0; j--){
            arr[j] *= right
            right *= nums[j]
        }
         return arr
    }
}
