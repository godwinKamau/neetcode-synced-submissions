class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //array of prices
        //number that calculates hightest amount of money you can make
        //[1,2,3,4,5,6] ----> 5
        //[5,4,3,2,1]-----> 0
        //[5,4,3,2,3]-----> 1
        //largest smallest number
        //min(...prices)
        //max(...prices)
        //index of min > index of max ---> 0

        let left = 0 
        let right = 1
        let maxP = 0

        while (right < prices.length){
            if (prices[left] < prices[right]){
                const profit = prices[right] - prices[left]
                maxP = Math.max(maxP, profit)
            } else {
                left = right
            }
            right++
        }

        return maxP
        
    }
}
