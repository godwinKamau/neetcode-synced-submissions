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
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const count = new Map()
        console.log(freq)
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n))
        }
        

        const res = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n)
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}
