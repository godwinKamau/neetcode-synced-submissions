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
        let stack = []
        let leftVal = 0
        let rightVal = 0
        let res = 0
        
        for (let i = 0; i < tokens.length; i++){
            
            if (set.has(tokens[i])){
                rightVal = Number(stack.pop())
                leftVal = Number(stack.pop())
                if (tokens[i] === "+") leftVal += rightVal
                if (tokens[i] === "-") leftVal -= rightVal
                if (tokens[i] === "*") leftVal *= rightVal
                if (tokens[i] === "/") leftVal /= rightVal
                console.log(parseInt(leftVal))
                stack.push(parseInt(leftVal))
            } else {    
                stack.push(tokens[i])
                console.log(stack)
            }
            
            
        }

        return leftVal
    }
}
