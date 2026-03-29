class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let counter = new Array(26).fill(0)

        //count all of the characters and add them to corresponding indices
        for (let i = 0; i < s.length; i++) {
            counter[s[i].charCodeAt() -97] += 1
        }
        console.log(counter)
    }
}












        // //subtract every character in the second string
        // for(let i = 0; i < t.length; i++) {
        //     counter[t[i].charCodeAt() -97]--
        // }
        // console.log(counter)
        // return counter.every(char => char === 0)
