class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p,i) => [p,speed[i]])
        let sorted = pairs.sort((a,b) => b[0] - a[0])

        let fleets = 1
        let prevTime = (target - sorted[0][0]) / sorted[0][1]
        for (let i = 0; i < speed.length; i++){
            let turns = (target - sorted[i][0]) / sorted[i][1]
            if(turns > prevTime) {
                fleets++;
                prevTime = turns
            }
        }
        return fleets;
        
        
    }
}
