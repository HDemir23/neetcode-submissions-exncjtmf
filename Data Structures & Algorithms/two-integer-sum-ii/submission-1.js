class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0;
        let right = numbers.length -1


        while(left < right){
            let tar = numbers[left] + numbers[right]

            if(tar === target){
                return [left + 1, right +1]
            }
            else if (tar < target){ left++}
            else  (right --)
        }
    }
}
