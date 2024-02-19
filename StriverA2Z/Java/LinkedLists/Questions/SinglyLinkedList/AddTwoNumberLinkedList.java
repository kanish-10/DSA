public class AddTwoNumberLinkedList {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{2,4,6});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{3,8,7});
        Node head = addTwoLinkedList(head1, head2);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node addTwoLinkedList(Node head1, Node head2) {
        Node temp1 = head1;
        Node temp2 = head2;
        Node dummyNode = new Node(-1);
        Node curr = dummyNode;
        int carry = 0;

        while (temp1 != null || temp2 != null) {
            int sum = carry;
            if (temp1 != null) sum += temp1.data;
            if (temp2 != null) sum += temp2.data;
            Node newNode = new Node(sum%10);
            carry = sum / 10;
            curr.next = newNode;
            curr = curr.next;

            if(temp1 != null) temp1 = temp1.next;
            if(temp2 != null) temp2 = temp2.next;
        }
        if(carry > 0) {
            curr.next = new Node(carry);
        }
        return dummyNode.next;
    }
}
