class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    /*
    array of numbers to represent a graph
    maximum area between heights

    [3,3,2,5]
    [3,3] ==> 3
    [3, 3, 2] ===> 4
    [3, 3, 2 , 5] ==> 9

    area = difference in indices * minimum number

    l = 0
    r= heights.length - 1
    maxArea = 0

    area = (r-l) * min(heights[l],heights[r])
    if (area > maxArea) maxArea = area

    if (l < r) {
        l++
    } else {
        r++
    }
    */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;

        while ( r - l > 0) {
            console.log(heights[l], heights[r])
            const area = (r-l) * Math.min(heights[l], heights[r]);

            if (area > maxArea) {maxArea = area}

            if (heights[l] <= heights[r]){
                l++;
            } else {
                r--;
            }
        }

        return maxArea
    }
}
