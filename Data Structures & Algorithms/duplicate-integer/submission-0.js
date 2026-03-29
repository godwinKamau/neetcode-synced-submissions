class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let array = []
        let answer = false
        nums.forEach(num => {
            if (!array.includes(num)){
                array.push(num)
            } else {
                answer = true
            }
        })

        return answer
    }
}
