class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        let hL = heights[left];
        let hR = heights[right];
        let currentHeight = Math.min(hL, hR);
        
        maxArea = Math.max(maxArea, currentHeight * (right - left));

        if (hL < hR) {
            while (left < right && heights[left] <= hL) left++;
        } else {
            while (left < right && heights[right] <= hR) right--;
        }
    }
    return maxArea;
    }
}
