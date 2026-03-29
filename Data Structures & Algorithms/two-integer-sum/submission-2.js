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
        // 2 4 loops 
        // target - 2nd 4 loop return indices with indexOf()
        for (let i = 0; i < nums.length; i++){
            for(let j = i + 1 ; j < nums.length; j++){
                if (nums[i] + nums[j] === target){
                    return [i,j]
                }
            }
        }
    }
}
