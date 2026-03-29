class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /*
        left
        right
        while left <= right
        mid
        if matrix[mid][matrix[mid].length-1] <= target & matrix[mid][0] >= target
        //inLeft=0
        //inRight=0
        while inleft <= inright
        midmid
        if matrix[mid][midmid] 
        if matrix[mid][0] > target
        left = mid +1
        if matrix[mid][0] < target
        right = mid -1
        */

        let left = 0
        let right = matrix.length - 1

        while (left <= right) {
            let mid = Math.floor((left+right)/2)
            
            if (matrix[mid][matrix[mid].length - 1] >= target && matrix[mid][0] <= target){
                console.log('here')
                let search = matrix[mid]
                let inLeft = 0
                let inRight = search.length - 1

                while (inLeft <= inRight) {
                    let inMid = Math.floor((inLeft + inRight) / 2)
                    if (search[inMid] === target){
                        return true
                    } else if ( search[inMid] > target){
                        inRight = inMid - 1
                    } else {
                        inLeft = inMid + 1
                    }
                }
                return false
            } else if (matrix[mid][0] < target) {
                left = mid + 1
            } else if (matrix[mid][0] > target) {
                right = mid - 1
            }
        }

        return false
    }
}
