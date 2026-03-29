class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * return an array of nums where each num = max value of sliding window
     * 
     */
    maxSlidingWindow(nums, k) {
        let l = 0,
            r = k - 1
        let res = []

        while (r < nums.length) {
            // add nums to temp array
            //find max
            //push max to res
            //increase l & r
            let temp = []
            for (let i = l; i < r + 1; i++){
                temp.push(nums[i])
            }
            let max = Math.max(...temp)
            res.push(max)
            l++
            r++
        }
        return res
    }
}
