class MinStack {
    constructor() {
        this.stack = []
        this.min = [Infinity]
        this.count = {}
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.count[val] = (this.count[val] || 0) + 1
        if (val < this.min[this.min.length-1]) this.min.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop()
        this.count[val]--
        if (val === this.min[this.min.length-1] && this.count[val] < 1) this.min.pop()
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
