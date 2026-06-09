class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //2 strings
        // boolean
        //"candle" "llama" ----> false
        //"cat" "tac" -----true
        //.split.sort
        //===

        
        return s.split('').sort().join('') === t.split('').sort().join('')
    }
}
