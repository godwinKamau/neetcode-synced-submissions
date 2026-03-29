class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //string
        //boolean
        //bob--> true
        //bot---> false
        //uniform array
        // join/trim
        //tolowercase
        //array,reverse,compare
        const regex = /\W+/g
        const string = s.replaceAll(regex,'').split('').join('').toLowerCase()
        return string === s.replaceAll(regex,'').toLowerCase()
    }
}
