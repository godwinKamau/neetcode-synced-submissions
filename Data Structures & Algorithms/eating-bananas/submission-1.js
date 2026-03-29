class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       /*perHour = h/piles.length
       max
       perEle = max/perHour
       */ 

      
        let max = -Infinity
        for (let i = 0; i < piles.length; i++){
        if (piles[i] > max) max = piles[i]
        }
        
        let left = 1
        let right = max
        let res = max
        

        while (left <= right){
            const mid = Math.floor((left+right)/2)
            let turns = 0;
            for ( let i = 0; i < piles.length; i++){
                turns += Math.ceil(piles[i]/mid)
            }
            if (turns <= h) {
                res = mid
                right = mid - 1
            } else (
                left = mid + 1
            )
        }

        return res

        // while ( left <= right ){
        //     //turns += Math.ceil(piles[i]/mid)
        //     //if turns < hours res = mid move right
        //     //if turns > hours move left
        //     let turns;
        //     for (let i = 0;)
        // }
    }
}
