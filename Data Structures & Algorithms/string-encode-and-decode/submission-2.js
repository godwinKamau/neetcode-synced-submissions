class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //array
        //array.length 0 ---> "EMPTYYO"
        return strs.length === 0 ? "EMPTYYO" : strs.join('#')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //if str is "EMPTYYO" --> return []
        return str === "EMPTYYO" ? [] : str.split('#')
    }

}
