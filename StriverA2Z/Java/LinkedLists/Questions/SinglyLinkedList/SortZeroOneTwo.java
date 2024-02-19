public class SortZeroOneTwo {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 0, 0, 0, 1, 2, 1, 2, 2, 2, 0, 2});
        head = sortZeroOneTwo(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node sortZeroOneTwo(Node head) {
        if (head == null || head.next == null) return head;
        Node zeroHead = new Node(-1);
        Node oneHead = new Node(-1);
        Node twoHead = new Node(-1);
        Node zero = zeroHead;
        Node one = oneHead;
        Node two = twoHead;
        Node temp = head;
        while (temp != null) {
            if (temp.data == 0) {
                zero.next = temp;
                zero = temp;
            } else if (temp.data == 1) {
                one.next = temp;
                one = temp;
            } else {
                two.next = temp;
                two = temp;
            }
            temp = temp.next;
        }
        zero.next = oneHead.next != null ? oneHead.next : twoHead.next;
        one.next = twoHead.next;
        two.next = null;

        return zeroHead.next;
    }
}
