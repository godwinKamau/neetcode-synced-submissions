class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for (let i = 0; i < strs.length; i++){
            let array = new Array(26).fill(0)
            
            for (let j = 0; j < strs[i].length; j++){
                array[strs[i].charCodeAt(j) - 97] += 1
            }

            const key = array.join(',')
            
            if (map[key]){
                console.log('matchfound',strs[i])
                map[key].push(strs[i])
            } else {
                map[key] = [strs[i]]
                
            }
        }
        return Object.values(map)        
    }
}
