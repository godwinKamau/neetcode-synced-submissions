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

      let perHour = Math.floor(h/piles.length)
      let max = -Infinity
      for (let i = 0; i < piles.length; i++){
        if (piles[i] > max) max = piles[i]
      }
      let perEle = max/perHour
      return perEle
    }
}
