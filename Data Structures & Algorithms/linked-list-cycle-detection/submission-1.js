/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let fPoint = head
        let sPoint = head

        while (fPoint && fPoint.next) {
            fPoint = fPoint.next.next
            sPoint = sPoint.next

            if (fPoint === sPoint) {
                return true
            }
        }

        return false
    }
}
