class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let arr = []

        

        for(let i =0; i < nums.length -2; i++){
            if(i > 0 && nums[i] === nums[i-1] )continue
            let right = nums.length - 1
            let left = i + 1

            while(left < right){
                let res = nums[right] + nums[i] + nums[left]

                if(res === 0){
                    arr.push([nums[right] , nums[i] , nums[left]])

                    while(left < right && nums[left] === nums[left +1 ]) left++
                    while (left < right &&nums[right] === nums[right -1]) right--
                    left++
                    right--
                }
                else if (res < 0) left++
                else right--
            }
        }return arr

    }
}
