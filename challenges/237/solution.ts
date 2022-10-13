// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
export const sampleNodes = new ListNode(
    4, new ListNode(
        5, new ListNode(
            1, new ListNode(9)
        )
    )
);

export const deleteNode = (root: ListNode | null): void => {
    root.val = root.next.val;
    root.next = root.next.next;
};