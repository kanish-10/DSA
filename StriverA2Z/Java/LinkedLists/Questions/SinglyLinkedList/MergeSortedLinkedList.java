public class MergeSortedLinkedList {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 8});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{3, 4, 5, 6, 7});
        Node sort = mergeLL(head1, head2);
        LinkedListOperations.traverseLinkedList(sort);
    }

    static Node mergeLL(Node head1, Node head2) {
        Node t1 = head1;
        Node t2 = head2;
        Node dNode = new Node(-1);
        Node temp = dNode;

        while (t1 != null && t2 != null) {
            if (t1.data < t2.data) {
                temp.next = t1;
                temp = t1;
                t1 = t1.next;
            } else {
                temp.next = t2;
                temp = t2;
                t2 = t2.next;
            }
        }
        if (t1 != null) temp.next = t1;
        else temp.next = t2;
        return dNode.next;
    }
}
