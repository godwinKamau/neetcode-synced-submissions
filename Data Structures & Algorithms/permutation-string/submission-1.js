class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false

        let s1Array = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++){
            const index = s1.charCodeAt(i) - 97
            s1Array[index] += 1
        }
        const sArray = s1Array.concat()
        console.log(sArray)

        let l = 0
        let r = s1.length-1

        while(l < r){
            
            if(s1Array[s2.charCodeAt(l)-97]){
                s1Array[s2.charCodeAt(l)-97] -= 1
                l++
            } else {
                s1Array = sArray.concat()
                l++
                r = l + s1.length
            }
            console.log(l,r)
            if (r > s2.length - 1) {
                return false
            }
        }

        return true
    }
}
