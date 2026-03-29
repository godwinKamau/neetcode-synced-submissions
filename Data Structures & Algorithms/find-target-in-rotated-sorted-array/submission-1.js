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
        //find pivot
        while (l < r) {
            let m = Math.floor((l+r) / 2)
            if(nums[m] > nums[r]) {
                l = m + 1
            } else {
                r = m
            }
        }
        
        let piv = l
        l = 0
        r = nums.length - 1

        //only search through needed half
        if (target >= nums[piv] && target <= nums[r]) {
            l = piv
        } else {
            r = piv - 1
        }

        //binary
        while (l <= r) {
            let m = Math.floor((l+r) / 2)
            if (nums[m] === target){
                return m
            } else if (nums[m] < target){
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return -1
        
    }
}
