public class DeleteAllOccurenceOfKey {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[] {10,4,10,10,6,10});
        head = deleteOccurenceOfKey(head, 10);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node deleteOccurenceOfKey(Node head, int key) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == key) {
                if (temp == head) head = head.next;
                Node prevNode = temp.prev;
                Node nextNode = temp.next;
                if (prevNode != null) prevNode.next = nextNode;
                if (nextNode != null) nextNode.prev = prevNode;
                temp = nextNode;
            } else temp = temp.next;
        }
        return head;
    }
}
