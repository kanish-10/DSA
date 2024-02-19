public class RemoveDuplicates {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 1, 1, 2, 3, 3, 4});
        head = removeDuplicates(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node removeDuplicates(Node head) {
        Node temp = head;
        while (temp != null && temp.next != null) {
            Node nextNode = temp.next;
            while (nextNode != null && nextNode.data == temp.data) nextNode = nextNode.next;
            temp.next = nextNode;
            if (nextNode != null) nextNode.prev = temp;
            temp = temp.next;
        }
        return head;
    }
}
