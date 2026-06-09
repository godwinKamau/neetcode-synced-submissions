class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    /**
     * Map
     * for loop
     * if Map[nums[i]]
     * return true
     * Map[nums[i]]=i
     */
    hasDuplicate(nums) {
        let map = new Map()
        for (let i = 0; i < nums.length; i++){
            if (map.has(nums[i])){
                return true
            } else {
                map.set(nums[i], i)
            }
            
        }
        console.log(map)
        return false
    }
}
