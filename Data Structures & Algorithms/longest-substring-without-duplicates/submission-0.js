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
                console.log('added',seen)
            } else if (seen.has(s[i])){
                let reached = false
                seen.forEach(char => {
                    if (reached === false) {
                        if (char === s[i]){
                            reached = true
                        } else {
                            seen.delete(char)
                        }
                    }
                })
            }
            if(seen.size > best) {
                best = seen.size
            }
        }

        return best
    }
}
