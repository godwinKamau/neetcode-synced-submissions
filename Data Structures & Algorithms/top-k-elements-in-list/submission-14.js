class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = Array.from({length:nums.length+1}, () => [])
        const count = new Map()
        
        for (const num of nums){
            count.set(
                num, 
                ((count.get(num) || 0) + 1)
            )
        }
        
        for (const pair of count.entries()){
            
            freq[pair[1]].push(pair[0])
            
        }

        let res = []

        for (let i = freq.length-1; k > 0 ; i--){
            
            if (freq[i].length){
                res.push(...freq[i])
                
                k = k - freq[i].length
                
            }
        }

        return res

    }
}
