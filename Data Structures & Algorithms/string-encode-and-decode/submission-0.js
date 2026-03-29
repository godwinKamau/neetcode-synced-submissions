class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const str = strs.join(' ')
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split(' ')
    }

}
