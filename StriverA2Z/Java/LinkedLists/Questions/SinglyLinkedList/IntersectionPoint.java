public class IntersectionPoint {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{1, 3});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4});
        Node head3 = LinkedListOperations.arrayToLinkedList(new int[]{5, 6, 7, 8});

        Node temp = head1;
        while (temp.next != null) temp = temp.next;
        temp.next = head3;

        temp = head2;
        while (temp.next != null) temp = temp.next;
        temp.next = head3;

        Node intersect = intersection(head1, head2);
        System.out.println(intersect.data + " " + intersect);
    }

    static Node intersection(Node head1, Node head2) {
        if (head1 == null || head2 == null) return null;
        Node t1 = head1;
        Node t2 = head2;
        while (t1 != t2) {
            t1 = t1.next;
            t2 = t2.next;
            if (t1 == t2) return t1;
            if (t1 == null) t1 = head2;
            if (t2 == null) t2 = head1;
        }
        return t1;
    }
}
