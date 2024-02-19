public class Add1ToLinkedList {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{9,9,9,9});
        head = add1(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static int helper(Node temp) {
        if (temp == null) return 1;
        int carry = helper(temp.next);
        temp.data = temp.data + carry;
        if (temp.data < 10) return 0;
        temp.data = 0;
        return 1;
    }

    static Node add1(Node head) {
        int carry = helper(head);
        if (carry == 1) {
            Node newNode = new Node(1);
            newNode.next = head;
            return newNode;
        }
        return head;
    }
}
