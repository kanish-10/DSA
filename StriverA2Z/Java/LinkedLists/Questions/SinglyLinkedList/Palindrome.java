public class Palindrome {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 3, 2, 1});
        checkPalindrome(head);
    }

    static Node reverse(Node head) {
        if (head == null || head.next == null) return head;
        Node newHead = reverse(head.next);
        Node front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }

    static void checkPalindrome(Node head) {
        if (head == null || head.next == null) {
            LinkedListOperations.traverseLinkedList(head);
            return;
        }
        Node slow = head;
        Node fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        Node newHead = reverse(slow.next);
        Node first = head;
        Node second = newHead;
        while (second != null) {
            if (first.data != second.data) {
                reverse(newHead);
                System.out.println("Not a Palindrome");
                return;
            }
            first = first.next;
            second = second.next;
        }
        reverse(newHead);
        System.out.println("Is a Palindrome");
    }
}
