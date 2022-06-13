/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
    let currentNode = new ListNode(0);
    let result = currentNode;
    let offset = 0;
    
    while(l1 || l2 )
    {
        let val = 0;
        if(l1){
            val += l1.val;
            l1 = l1.next;
        }
        if(l2){
            val += l2.val;
            l2 = l2.next;
        }
        val += offset;
        
        currentNode.next = new ListNode(val%10)
        currentNode = currentNode.next
        offset = Math.floor(val/10) 
    }
    
    if(offset){
        currentNode.next = new ListNode(offset)
    }
    
    return result.next;
};