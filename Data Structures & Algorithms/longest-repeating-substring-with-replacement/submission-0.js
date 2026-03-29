class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * "SSSSESSSS", k=1 ----> 10
     * 
     * res = 0
     * skip = k
     * temp = 0
     * l = 0
     * map = {}
     * 
     * for s[i]{
     *  if map[s[i]]{
     *  map[s[i]] += 1
     * } else {
     *  map[s[i]] = 1
     * }
     * }
     * 
     * max = Math.max(...values(map[s[i]]))
     * maxLetter = ""
     * for (letter in map){
     * if map[letter] = max{
     * maxletter = letter
     * }
     * }
     * 
     * while (skip > 0) {
     * for (s[i]){
     *  if s[i] !== maxLetter {
     *  s[i] = maxLetter
     *  
     * }
     * }
     * }
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let map = new Map();

        for (let i = 0; i < s.length; i++){
            if ( map[s[i]] ) {
                map[s[i]] += 1;
            } else {
                map[s[i]] = 1
            }
        }

        const max = Math.max(...Object.values(map))
        let maxLetter = ""

        for (let letter in map) {
            if (map[letter] === max) {
                maxLetter = letter
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] === maxLetter) {
                res++
            } else if (s[i] !== maxLetter && k > 0) {
                res++
                k--
            }
        }
        return res

        // let skip = k
        // for (let i = 1; i < s.length; i++){
        //     if (s[l] !== maxLetter && skip === 0){
        //         l++
        //     } else if (s[i] !== maxLetter && )
        // }
        
    }
}
