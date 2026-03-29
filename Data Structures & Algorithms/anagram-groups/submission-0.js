class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //array of strings
        //matrix with arrays strings that are anagrams
        //[act, larry, cat, god, tac, dog] -----> [[act,cat,tac],[dog, god], [larry]]
        //object ---> 
        //loop through the array ----> add original sorted word with object[s.word] = [o.word]
        //push sorted word into the value array
        // create an answer matrix with the Object.values(object)

        let sorted = {}

        strs.forEach(word=> {
            let sWord = word.split('').sort().join('')
            if (!Object.keys(sorted).includes(sWord)){
                sorted[sWord] = [word]
            } else {
                sorted[sWord].push(word)
            }
        })

        return Object.values(sorted)
    }
}
