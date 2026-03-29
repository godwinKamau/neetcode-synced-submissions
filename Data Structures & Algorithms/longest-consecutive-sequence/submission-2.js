class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //array of numbers
        //amount of consectutive numbers
        //length btwn 0-1000
        //
        //sort with reduce
        //hash map no duplicates

        //highScore = 0
        //sort by reduce for new array
        //get rid of duplicates with set
        //===loop through set and find consecutives
        //for i, set.length
        //score to hold temporary count
        //score = set[i+1] === set[i] + 1? score++ : continue
        //highscore = score > highscore ? highscore = score : highscore
        //
        //return highscore

        let highscore = 0
        let score = 0
        const newNums = nums.sort((a,b) => a - b)
        const numsSet = new Set
        newNums.forEach(num => numsSet.add(num))
        console.log(numsSet.size)
        for (const num of numsSet){
            
            if (numsSet.has(num + 1)){
                score += 1
                if (highscore < score) {
                    highscore = score
                }
            } else {
                score = 0
            }
            
        }
        
        return nums.length === 0 ? highscore : highscore + 1
    }
}
