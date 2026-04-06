class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let res = 0


        while(left < right){
            let width = right - left
            let height = Math.min(heights[right] , heights[left])
            let area = width * height

            res = Math.max(res , area )

            if(heights[left] < heights[right]){
                left++
            }else right--
        }

        return res

    }
}
