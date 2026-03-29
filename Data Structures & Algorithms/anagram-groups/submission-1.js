class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for (let i = 0; i < strs.length; i++){
            let sum = 0
            for (let j = 0; j < strs[i].length; j++){
                sum += strs[i].charCodeAt(j)
            }
            if (!map[sum]) {
                map[sum] = [strs[i]]
            } else {
                map[sum].push(strs[i])
            }
        }

        return Object.values(map)
    }
}
