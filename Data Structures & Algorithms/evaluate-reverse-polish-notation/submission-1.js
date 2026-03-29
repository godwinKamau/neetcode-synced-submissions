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
        let leftVal = Number(tokens[0])
        let rightVal = 0
        
        for (let i = 1; i < tokens.length; i++){
            if (set.has(tokens[i])){
                console.log(tokens[i])
                if (tokens[i] === "+") {
                    leftVal += rightVal
                }
                if (tokens[i] === "-") leftVal -= rightVal
                if (tokens[i] === "*") leftVal *= rightVal
                if (tokens[i] === "/") leftVal /= rightVal
            }
            rightVal = Number(tokens[i])
        }

        return leftVal
    }
}
