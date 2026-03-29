class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /*
        find max
        left=0
        right=lastnumlength
        min = infinity
        while l<=r
        mid=math.floor(l+r/2)
        if mid>mid-1 left=mid+1
        if mid<mid-1  right = mid-1

        find number 'after' max
        */

        let l = 0
        let r = nums.length-1
        
        while (l < r) {
            let m = l + Math.floor((r - l) / 2)
            console.log("Number: ",nums[m])
            if (nums[m] < nums[r]) {
                r = m
            } else {
                l= m + 1
            }
        }

        return nums[r]
    }
}
