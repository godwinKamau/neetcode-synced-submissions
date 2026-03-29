class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        
        const regex = /\W+/g
        const string = s.replaceAll(regex,'').toLowerCase()
        
        let r = string.length-1

        while (l < r) {
            if (string[l] !== string[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
}
