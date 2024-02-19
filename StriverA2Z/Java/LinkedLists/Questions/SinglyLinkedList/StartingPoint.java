public class StartingPoint {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{9, 2, 3, 4, 5});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{5, 2});

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
        System.out.println(startPoint(head2).data);
    }

    static Node startPoint(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;
    }
}
