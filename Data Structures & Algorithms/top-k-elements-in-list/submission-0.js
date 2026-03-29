class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //array, frequency
        //return any numbers that meet or exceed that frequency
        //[4,5,5.6], k=2 ---> [5]
        //[2,3,4,4,5], k=2-----> [4]
        // answerArray
        // kObj = {}
        // nums.forEach(num => {
        //  if (!kObj[num]) {
            //instantiate and increment value of object by 1
        //} else{
            //increment
        //}
        //})
        //if object[keys] >= k
        //answerArray.push(object[keys])

        let kObj = {}
        let answer = []
        nums.forEach(num=> {
            if (!kObj[num]){
                kObj[num] = 1
            } else {
                kObj[num] += 1
            }
        })

        let keys = Object.keys(kObj)
        keys.forEach(key => {
            if(kObj[key] >= k){
                answer.push(key)
            }
        })
        return answer
    }
}
