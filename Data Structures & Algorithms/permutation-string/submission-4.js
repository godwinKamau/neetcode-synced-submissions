class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * let hash = new Array
     */
    checkInclusion(s1, s2) {
        let hash = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++){
            hash[s1.charCodeAt(i)-97]++
        }
        
        let window = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            window[s2.charCodeAt(i)-97]++
        }
        
       //initial number of matches
       let matches = 0;
       for (let i = 0; i < 26; i++) {
        if (hash[i] === window[i]) {
            matches++
        }
       }

        let l = 0
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true
            }

            //index is the pointer for manipulating the window
            let index = s2.charCodeAt(r) - 97
            window[index]++
            if(hash[index] === window[index]){
                matches++;
            } else if (hash[index] + 1 === window[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 97
            window[index]--
            if (hash[index] === window[index]){
                matches++;
            } else if (hash[index] - 1 === window[index]) {
                matches--;
            }
            l++
        }
        return matches === 26
    }
}
