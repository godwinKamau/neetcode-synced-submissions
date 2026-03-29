class MinStack {
    constructor() {
        this.stack = []
        this.min = [Infinity]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (val < this.min[this.min.length-1]) this.min.push(val)
        console.log(this.min)
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop()
        if (val === this.min[this.min.length-1]) this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log(this.stack)
        return this.min[this.min.length-1]
    }
}
