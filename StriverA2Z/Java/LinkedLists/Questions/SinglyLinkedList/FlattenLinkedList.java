class FlattenNode {
    FlattenNode child;
    FlattenNode next;
    int data;

    FlattenNode(int data) {
        this.data = data;
        this.next = null;
        this.child = null;
    }
}


public class FlattenLinkedList {
    public static void main(String[] args) {
        FlattenNode head = arrayToLL(new int[] {3});
        FlattenNode head2 = arrayToLL(new int[] {2, 10});
        FlattenNode head3 = arrayToLL(new int[] {1, 7, 11, 12});
        FlattenNode head4 = arrayToLL(new int[] {4, 9});
        FlattenNode head5 = arrayToLL(new int[] {5, 6, 8});

        head.next = head2;
        head2.next = head3;
        head3.next = head4;
        head4.next = head5;

        head = flatten(head);
        print(head);
    }

    static FlattenNode arrayToLL(int[] arr) {
        if (arr.length == 0) return null;
        FlattenNode head = new FlattenNode(arr[0]);
        FlattenNode temp = head;
        for (int i = 1; i < arr.length; i++) {
            temp.child = new FlattenNode(arr[i]);
            temp = temp.child;
        }
        return head;
    }

    static void print(FlattenNode head) {
        FlattenNode temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.child;
        }
        System.out.println();
    }

    static FlattenNode merge2List(FlattenNode l1, FlattenNode l2) {
        FlattenNode dNode = new FlattenNode(-1);
        FlattenNode temp = dNode;

        while (l1 != null && l2 != null) {
            if (l1.data < l2.data) {
                temp.child = l1;
                temp = l1;
                l1 = l1.child;
            } else {
                temp.child = l2;
                temp = l2;
                l2 = l2.child;
            }
            temp.next = null;
        }

        if (l1 != null) temp.child = l1;
        else temp.child = l2;

        return dNode.child;
    }

    static FlattenNode flatten(FlattenNode head) {
        if (head == null || head.next == null) return head;
        FlattenNode mergeHead = flatten(head.next);
        return merge2List(head, mergeHead);
    }
}
