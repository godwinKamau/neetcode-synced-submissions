class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        const product = nums.reduce((a,b) => a*b)
        for (const num of nums){
            if (num !== 0) {
                result.push(product/num)
            } else {
                let nums2 = nums
                nums2.splice(nums2.indexOf(num),1,1)
                const productWithoutZero = nums2.reduce((a,b) => a*b)
                result.push(productWithoutZero)
            }
        }
        console.log(nums)
        return result
    }
}
