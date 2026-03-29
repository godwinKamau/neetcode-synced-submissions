class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     * hashT = {}
     * loop through t and put frq in hashT
     * loop through s
     * if s in hashT
     * hashT[s]--
     * if Object.values(hashT).every(<0)
     * l++
     * if hashT.has(s[l])
     * return s[l]-i
     */
    minWindow(s, t) {
        if(t === '') return ''

        let hashS = new Map()
        let hashT = new Map()
            
        for (let i = 0; i < t.length; i++){
            const c = t[i]
            hashT[c] = (hashT[c] || 0) + 1
        }
        
        //variables for keeping track of minimum window
        let have = 0,   //how many matches the window has
            need = Object.keys(hashT).length //how many matches are needed
        
        let res = [-1,-1] //actual response indices
        let resLen = Infinity //starting minimum window
        let l = 0   //left index
        
        for (let r = 0 ; r < s.length; r++) {
            let c = s[r]
            hashS[c] = (hashS[c] || 0) + 1 //adding to hashS regardless of if it is needed (think 2 sum) 

            //if hashT and hashS match, add to have
            if (hashT[c] && hashT[c] === hashS[c]){
                have++
                console.log(c)
            }
            console.log(have,need)
            while (have === need) {
                
                if (r - l +1 < resLen){
                    resLen = r - l + 1
                    res = [l,r]
                }

                hashS[s[l]]--
                if (hashT[s[l]] && hashS[s[l]] < hashT[s[l]]) {
                    have--
                }
                l++
            }

            
        }
        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
