class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10,11,12,13,12,11,9] ---> 3
     * [20, 11, 14, 17, 16, 10] ---> 6

     * minLeft, numbers before i
     * maxRight, numbers after i
     * diff = maxRight - minLeft
     * 
     * }
     * }
     */
    maxProfit(prices) {
        const n = prices.length - 1
        let res = 0
        let minLeft = new Array(n + 1).fill(0)
        let maxRight = new Array(n + 1). fill(0)
        
        
        
        for (let i = 0; i <= n; i++) {
            minLeft[i] = Math.min(minLeft[i-1] || prices[i], prices[i])
        }

        for (let i = n; i >= 0; i--){
            maxRight[i] = Math.max(maxRight[i+1] || prices[i], prices[i])
        }
        
        for (let i = 0; i <= n; i++) {
            console.log(maxRight[i], minLeft[i])
            if (maxRight[i] - minLeft[i] > res) {
                res = maxRight[i] - minLeft[i]
            }
        }
        return res
    }
}
