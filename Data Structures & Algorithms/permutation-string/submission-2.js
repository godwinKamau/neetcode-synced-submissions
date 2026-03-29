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
        
        let l = 0,
            r = s1.length - 1
        while (r < s2.length){
            if (hash[s2.charCodeAt(l)-97] < 1) {
                l++
                r = l + s1.length - 1
            } else if (hash[s2.charCodeAt(l)-97] > 0) {
                console.log(s2.slice(l,r))
                hash[s2.charCodeAt(l)-97]--
                l++
            }

            if (l === r + 1) {
                return true
            }
        }

        return false
    }
}
