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

        //index -- 0
        // let buyDay = prices[0]
        // let sellDay = prices[0]
        // for(let i = 0; i < prices.length-1; i++){
        //     for(let j = i+1 ; j < prices.length-1 ; j++){
        //         if(buyDay > j){
        //             buyDay = prices[j]
        //         }
        //         if (sellDay < j) {
        //             sellDay = prices[j]
        //         }
        //     }
        // }
        // console.log(buyDay,sellDay)
        let buyDay = Math.min(...prices)
        let sellDay = Math.max(...prices)
        if (prices.indexOf(sellDay) < prices.indexOf(buyDay)){
            let newPrices = prices.splice(prices.indexOf(buyDay), prices.length - prices.indexOf(buyDay))
            sellDay = Math.max(...newPrices)
        } 
        
        return sellDay - buyDay
        
    }
}
