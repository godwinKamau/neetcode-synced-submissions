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

        //find max values and push the keys k amount of times
        //for(i<k)
        //Math.max Object.values
        //add the key to the array
        //  Object.keys ---> if kObj[key] === math.max
        // add it to the answer
        const keys = Object.keys(kObj)
        let values = Object.values(kObj)
        for (let i = 0 ; i < k; i++){
            const maximum = Math.max(...values)
            keys.forEach(key => {
                if(kObj[key] === maximum){
                    answer.push(key)
                    values.splice(values.indexOf(maximum),1)
                    console.log('new values',values)
                }
            })
        }


        return answer
    }
}
