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
        let mid = Math.floor((l+r)/2)
        
        if (nums[mid] > nums[l]){
            l = mid
            while (l <= r) {
                mid = Math.floor((l+r)/2)
                if (nums[mid] >  nums[l]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
                console.log(nums[mid])
            }
        } else if (nums[mid] > nums[r]){
            r = mid
            while (l <= r) {
                mid = Math.floor((l+r)/2)
                if (nums[mid] >  nums[l]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }
        return nums[mid]
    }
}
