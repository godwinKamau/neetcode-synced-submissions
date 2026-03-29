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
        let prevTime = (target - pairs[0][0]) / pairs[0][1]
        for (let i = 0; i < speed.length; i++){
            let turns = (target - position[i]) / speed[i]
            if(turns > prevTime) {
                fleets++;
                prevTime = turns
            }
        }
        return fleets;
        
        
    }
}
