class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * [2,3,2,1,3] ----> 3
     * two arrays
     * leftMax refers to the max number to the left of the array
     * rightMax refers to the max number to the right of the array
     * water = min(leftMax,rightMax) - height[i]
     * if water > 0 add it to the sum
     * 
     * leftMax, rightMax = new Array().fill(0)
     * 
     * for (let i = 0; i < height.length; i++){
     *  leftMax[i] = max(height[i], leftMax[i-1])
     * }
     * 
     * for (let i = height.length;)
     *  rightMax[i] = mas(height[i], rightMax[i+1])
     * }
     * 
     * for (i) {
     *  water = min(maxLeft,maxRight) - height[i]
     *  water > 0 ? sum += water
     * }
     */
    trap(height) {
        let res = 0
        const n = height.length
        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            leftMax[i] = Math.max(height[i-1] || 0, leftMax[i-1]|| 0)
        }
        
        for (let i = n - 1; i >= 0; i--) {
            rightMax[i] = Math.max(height[i+ 1] || 0, rightMax[i+1] || 0)
        }
        
        for (let i = 0; i < n; i++) {
            const water = Math.min(leftMax[i], rightMax[i]) - height[i]
            if (water > 0) res += water
        }

        return res
    }
}
