class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * new Map()
     * answer[]
     * loop
     * add {number: frequency}
     * for key in map
     * if frequency > k
     * push to answer
     * 
     * return answer
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let res = []

        for (let i = 0; i < nums.length; i++){
            if(map[nums[i]]){
                map[nums[i]] += 1
            } else {
                map[nums[i]] = 1
            }
        }

        for (const key in map) {
            if (map[key] >= k) {
                res.push(key)
            }
        }

        return res
    }
}
