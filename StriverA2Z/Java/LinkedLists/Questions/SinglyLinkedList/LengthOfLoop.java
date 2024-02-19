public class LengthOfLoop {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{9, 2, 5, 3, 4, 5});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{5, 2, 2});

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
        System.out.println(lengthOfLoop(head2));
    }

    static int lengthOfLoop(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                int cnt = 1;
                fast = fast.next;
                while (slow != fast) {
                    cnt++;
                    fast = fast.next;
                }
                return cnt;
            }
        }
        return 0;
    }
}
