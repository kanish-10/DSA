class CopyNode {
    int val;
    CopyNode next;
    CopyNode random;
    CopyNode(int value) {
        val = value;
        next = null;
        random = null;
    }
}
public class CopyListWithRandomPointers {
    static CopyNode copyRandomList(CopyNode head) {
        CopyNode temp = head;
        //step 1
        while(temp != null) {
            CopyNode newNode = new CopyNode(temp.val);
            newNode.next = temp.next;
            temp.next = newNode;
            temp = temp.next.next;
        }
        //step 2
        CopyNode itr = head;
        while(itr != null) {
            if(itr.random != null)
                itr.next.random = itr.random.next;
            itr = itr.next.next;
        }
        //step 3
        CopyNode dummy = new CopyNode(0);
        itr = head;
        temp = dummy;
        CopyNode fast;
        while(itr != null) {
            fast = itr.next.next;
            temp.next = itr.next;
            itr.next = fast;
            temp = temp.next;
            itr = fast;
        }
        return dummy.next;
    }

    static void printList(CopyNode head) {
        while(head != null) {
            System.out.print(head.val+":");
            if(head.next != null)
                System.out.print(head.next.val);
            else
                System.out.print("NULL");
            if(head.random != null)
                System.out.print(","+head.random.val);
            else
                System.out.print(",NULL");
            System.out.println();
            head = head.next;
        }
    }

    public static void main(String args[]) {
        CopyNode head = null;

        CopyNode node1 = new CopyNode(1);
        CopyNode node2 = new CopyNode(2);
        CopyNode node3 = new CopyNode(3);
        CopyNode node4 = new CopyNode(4);

        head = node1;
        head.next = node2;
        head.next.next = node3;
        head.next.next.next = node4;

        head.random = node4;
        head.next.random = node1;
        head.next.next.random = null;
        head.next.next.next.random = node2;

        System.out.println("Original list:(current node:node pointed by next pointer, node pointed by random pointer)");
        printList(head);

        System.out.println("Copy list:(current node:node pointed by next pointer,node pointed by random pointer)");
        CopyNode newHead = copyRandomList(head);
        printList(newHead);
    }

}
