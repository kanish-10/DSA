public class EvenAndOdd {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1,2,3,7});
        head = evenAndOdd(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node evenAndOdd(Node head) {
        if (head == null || head.next == null) return head;
        Node even = head.next;
        Node odd = head;
        Node evenHead = head.next;

        while (even != null && even.next != null) {
            odd.next = odd.next.next;
            even.next = even.next.next;

            odd = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
        return head;
    }
}
