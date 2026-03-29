class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
        result
        map
        add every num to map
        for i{
        for j{
        i+j = diff
        if diff is in map
            push to result
        }
        }
        */
        const sorted = nums.sort((a,b) => a - b)
        console.log(sorted)
        let res = []
        
        for (let i = 0; i < sorted.length; i++) {
            let j = i + 1;
            let k = sorted.length - 1;

            while (j < k){
                if (sorted[i] + sorted[j] + sorted[k] > 0) {
                    j++
                } else if (sorted[i] + sorted[j] + sorted[k] < 0) {
                    k--
                } else if (sorted[i] + sorted[j] + sorted[k] === 0) {
                    res.push([sorted[i], sorted[j], sorted[k]]);
                    j++
                    k--
                }
            }
        }
        return res;
    }
}
