class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right){
            let index = Math.floor((right + left)/2)
            if (nums[index] === target) {return index}
            else if (nums[index] < target)(
                left = index +1
            )
            else if (nums[index] > target){
                right = index -1
            }
        }

        return -1
    }
}
