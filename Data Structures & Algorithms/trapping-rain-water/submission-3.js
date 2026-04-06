class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /*
        res = 0
        leftMax
        rightMax
        minMax - height
        */

        const n = height.length
        let res = 0
        let leftMax = new Array(n - 1).fill(0)
        let rightMax = new Array(n - 1).fill(0)

        for (let i = 0; i < n; i++){
            leftMax[i] = Math.max((leftMax[i-1] || 0), (height[i-1] || 0)) 
        }
        
        for (let i = n - 1; i >= 0; i--) {
            rightMax[i] = Math.max((rightMax[i+1] || 0), (height[i+1] || 0))
        }
        
        for (let i = 0; i < n; i++){
            let water = Math.min(rightMax[i],leftMax[i]) - height[i]
            if (water > 0) res += water
            
        }

        return res
    }
}
