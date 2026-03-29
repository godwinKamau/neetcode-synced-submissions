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
            let mid = Math.floor((l+r)/2)
            console.log(nums[mid])
            if (nums[mid] > nums[mid - 1]){
                l = mid + 1
            } else {
                r = mid
            }
        }
        return nums[r]
    }
}
