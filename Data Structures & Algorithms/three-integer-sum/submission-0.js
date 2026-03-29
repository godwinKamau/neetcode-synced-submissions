class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //array of nums
        //array of every 3 num combination that equals zero
        //[1,2,3,-2,-1,4] --> [[3,-2,-1]]
        //sort the aray
        //larger numbers == target
        //loop through 2 sets of numbers from beginning to see if numbers add up to target
        let result = [];
        nums.sort((a,b) => a - b);
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j +1; j < nums.length; k++) {
                    if (nums[j] + nums[k] + nums[i] === 0){
                        console.log('found');
                    }
                }
            }
        }
    }
}
