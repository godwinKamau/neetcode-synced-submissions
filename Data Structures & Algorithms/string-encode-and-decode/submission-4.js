class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //array
        //array.length 0 ---> "EMPTYYO"
        return strs.length === 0 ? "EMPTYYO" : strs.join('SPaCE')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //if str is "EMPTYYO" --> return []
        if (str === "EMPTYYO") {
            return []
        } else {
            return str.split('SPaCE')
        }
    }

}
