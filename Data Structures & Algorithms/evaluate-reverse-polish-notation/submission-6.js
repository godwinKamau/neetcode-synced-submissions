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

        if( tokens.length === 1) return Number(tokens[0])

        let set = new Set(["+","-","*","/"])
        let stack = []
        let leftVal = 0
        let rightVal = 0
        
        for (let i = 0; i < tokens.length; i++){
            
            if (set.has(tokens[i])){
                let res;
                rightVal = Number(stack.pop())
                leftVal = Number(stack.pop())
                if (tokens[i] === "+") res = leftVal + rightVal
                if (tokens[i] === "-") res = leftVal - rightVal
                if (tokens[i] === "*") res = leftVal * rightVal
                if (tokens[i] === "/") res = Math.trunc(leftVal / rightVal)
                console.log(res)
                stack.push(res)
            } else {    
                stack.push(tokens[i])
            }
            
            
        }

        return stack[0]
    }
}
