class Solution {
    /**
     * @param {string} s
     * @return {number}
     * declare best = 0
     * r=1
     * l=0
     * for each letter at index
     * find index of next duplicate letter
     * 
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0
        let best = 0
        let seen = new Set()
        

        for(let i = 0; i < s.length; i++){

            if (!seen.has(s[i])){
                seen.add(s[i])
            } else if (seen.has(s[i])){
                console.log('seen',seen,'new char', s[i])
                let reached = false
                for (let char of seen) {
                    if (reached === false) {
                        if (char === s[i]){
                            seen.delete(char)
                            reached = true
                        } else {
                            seen.delete(char)
                        }
                    }
                }
                seen.add(s[i])
            }
            if(seen.size > best) {
                best = seen.size
            }
        }

        return best
    }
}
