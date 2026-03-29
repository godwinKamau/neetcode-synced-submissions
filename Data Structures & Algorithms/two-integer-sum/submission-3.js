class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //array of numbers and target
        //array back indices numbers that equal target
        //[1,2,3,4] = 7 ----> [2,3]
        //hash-map

        let hash = {}

        for(let i = 0; i < nums.length; i++){
            console.log(target-nums[i])
            if (Object.keys(hash).includes(String(target-nums[i]))){
                return [nums.indexOf(target - nums[i]) , i]
            } else {
                hash[nums[i]] = i
            }
            console.log(Object.keys(hash).includes(target-nums[i]))
        }
        
    }
}
