class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bracketPairs = {
            '[' : ']',
            '{' : '}',
            '(' : ')'
        };

        let tracked = [];

        for (let i = 0; i < s.length; i++){
            if (s[i] in bracketPairs){
                tracked.push(s[i])
            } else {
                console.log('here')
                if (bracketPairs[tracked[tracked.length-1]] === s[i]) {
                    tracked.pop()
                } else { return false }
            }
        }

        return tracked.length === 0
    }
}
