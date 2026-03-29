class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create map
        let map = new Map()

        for (let i = 0; i < strs.length; i++){
            //Create hot garbage
            let count = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++){
                count[strs[i].charCodeAt(j) - 97] += 1
            }
            const key = count.join(',')

            //add key/value pair
            if (!map[key]) {
                map[key] = [strs[i]]
            } else {
                map[key].push(strs[i])
            }
        }

        //return a list of all the values
        return Object.values(map)
    }
}
