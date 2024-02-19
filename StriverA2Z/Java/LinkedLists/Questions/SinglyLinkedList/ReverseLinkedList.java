public class ReverseLinkedList {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 3, 2, 8});
        Node reverseList = reverseNormal(head);
        LinkedListOperations.traverseLinkedList(reverseList);
        Node recursionReverse = reverseRecursion(head);
        LinkedListOperations.traverseLinkedList(recursionReverse);
    }

    static Node reverseNormal(Node head) {
        Node prev = null;
        Node temp = head;
        while (temp != null) {
            Node front = temp.next;
            temp.next = prev;
            prev = temp;
            temp = front;
        }
        return prev;
    }

    static Node reverseRecursion(Node head) {
        if (head == null || head.next == null) return head;
        Node newHead = reverseRecursion(head.next);
        Node front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }
}
