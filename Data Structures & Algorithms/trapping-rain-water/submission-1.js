class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * [2,3,2,1,3] ----> 3
     * two pointer search
     * l=0
     * r= height.length - 1
     * if i > l && water <= 0
     * l++
     * if i >= l && water > 0
     * sum += water
     * if i < l
     * water = l-i
     * i++
     * 
     */
    trap(height) {
        let sum = 0;
        let water = 0;
        let l = 0;

        for (let i = 1; i < height.length; i++){
            if ( height[i] > height[l] && water <= 0 ){
                l++;
            } else if ( height[i] >= height[l] && water > 0) {
                sum += water;
                l=i;
                water = 0;
            } else if ( height[i] < height[l]){
                water += height[l] - height[i];
            }
            console.log(water, sum);
            
        }
        return sum
    }
}
