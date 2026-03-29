class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //array in non-decreasing order, target sum
        //index, starting at 1, of 2 numbers num in array that equal the sum
        //[2,5,7,19] -- t: 12 ---> [2,3]
        //target - numbers[ind] = cp
        //numbers.contain(cp)?
        //if so, return numbers.indexOf(numb[ind]) + 1, .indexOf(cp) + 1

        for (let i = 0; i < numbers.length; i++) {
            if(numbers.includes(target - numbers[i])) {
                return [numbers.indexOf(numbers[i]) + 1, numbers.indexOf(target - numbers[i]) + 1];
            }
        }
    }
}
