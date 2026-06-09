class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let array = new Array(26).fill(0)
        
        for (let i = 0; i < s.length; i++){
            array[s[i].charCodeAt() - 97] += 1
        }
        for (let i =0; i < t.length; i++){
            array[t[i].charCodeAt() - 97] -= 1
        }
        return array.every(num => num === 0)
    }
}
