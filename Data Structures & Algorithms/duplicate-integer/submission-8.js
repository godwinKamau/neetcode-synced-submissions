class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums2 = nums.sort((a,b) => a-b);
        for (let i = 0; i < nums.length-1; i++){
            if (nums2[i] === nums2[i+1]) {
                return true
            }
        }
        return false
    }
}
