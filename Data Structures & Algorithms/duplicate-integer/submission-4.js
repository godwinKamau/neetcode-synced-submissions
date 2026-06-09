class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    /**
     * Set
     * if set has number return true
     * if not, add to set
     */
    hasDuplicate(nums) {
        let set = new Set()
        for (let i = 0; i < nums.length; i++){
            if (set.has(nums[i])){
                return true
            } else (
                set.add(nums[i])
            )
        }
        return false
    }
}
