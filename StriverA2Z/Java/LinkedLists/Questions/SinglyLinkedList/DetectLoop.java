public class DetectLoop {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 5});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{1, 2});

        Node temp = head1;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = head1;

        temp = head2;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = head1;
        System.out.println(detectLoop(head2));
    }

    static boolean detectLoop(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}
