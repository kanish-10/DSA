public class TortoiseAndHare {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[] {1,2,3,4,5,6});
        Node mid = middle(head);
        System.out.println(mid.data);
    }

    static Node middle(Node head) {
        Node fast = head;
        Node slow = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
