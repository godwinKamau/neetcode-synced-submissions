class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
        let arr = new Array(26).fill(0);

        for (const char of s){
            console.log(char.charCodeAt() - 97)
            arr[char.charCodeAt() - 97] += 1;
        }
        
        for (const char of t) {
            arr[char.charCodeAt() - 97] -= 1;
        }

        return arr.every(num => num === 0)
    }
}
