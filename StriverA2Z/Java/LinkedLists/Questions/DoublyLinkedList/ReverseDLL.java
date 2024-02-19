public class ReverseDLL {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        Node head = LinkedListOperations.arrayToLinkedList(arr);
        head = reverseDLL(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node reverseDLL(Node head) {
        if (head == null || head.next == null) return head;
        Node temp = head;
        Node prevNode = null;
        while (temp != null) {
            prevNode = temp.prev;
            temp.prev = temp.next;
            temp.next = prevNode;
            temp = temp.prev;
        }
        return prevNode.prev;
    }
}
