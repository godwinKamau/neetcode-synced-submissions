class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /*
        l,r
        find which initial half
        binary search that range
        */

        let l = 0
        let r = nums.length-1
        let m = Math.floor((l+r)/2)

        if (nums[m] > nums[r] && nums[r] > target) {
            l = m + 1
            while(l < r){
                m = Math.floor((l+r)/2)
                if (nums[m] == target) {
                    return m
                }
                else if (nums[m] < target) {
                    l = m + 1
                }
                else {
                    r = m
                }
            }
            return -1
        } else {
            r = m - 1
            while (l < r) {
                m = Math.floor((r - 1)/2)
                if (nums[m] == target) {
                    return m
                }
                else if (nums[m] < target) {
                    l = m + 1
                }
                else {
                    r = m
                }
            }
            return -1
        }
    }
}
