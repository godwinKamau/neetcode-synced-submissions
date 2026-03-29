class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false
        
        let sArray = new Array(26).fill(0)
        
        for (let i = 0; i < s.length; i++){
            sArray[s.charCodeAt(i)-97] += 1
        }
        
        for (let i = 0; i < t.length; i++){
            if (sArray[t.charCodeAt(i)-97] <= 0) {
                return false
            } else {
                sArray[t.charCodeAt(i)-97] -= 1
            }
        }
        return true
    }
}
