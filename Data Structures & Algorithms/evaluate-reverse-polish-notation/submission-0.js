class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        /*
        ["2","1","+","3","*"] ===> 9
        leftVal = tokens[0]
        set{ +,-,*,/}
        rightVal = 0
        loop{
        if set.has(tokens[i]){
        use string as the operand for leftVal and rightVal and replace leftVal
        }
        else{
        rightVal = s[i]
        }
        }
        return leftVal
        */

        let set = new Set(["+","-","*","/"])
        console.log(set)
    }
}
