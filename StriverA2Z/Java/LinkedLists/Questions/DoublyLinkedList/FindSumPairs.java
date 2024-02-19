import java.util.ArrayList;
import java.util.Arrays;

public class FindSumPairs {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 9});
        ArrayList<int[]> ans = findSumPairs(head, 5);
        for (int[] x : ans) System.out.println(Arrays.toString(x));
    }

    static ArrayList<int[]> findSumPairs(Node head, int sum) {
        ArrayList<int[]> ans = new ArrayList<>();
        if (head == null) return ans;
        Node left = head;
        Node right = head;
        while (right.next != null) right = right.next;
        while (left.data < right.data) {
            int add = left.data + right.data;
            if (add == sum) {
                ans.add(new int[]{left.data, right.data});
                left = left.next;
                right = right.prev;
            } else if (add < sum) left = left.next;
            else right = right.prev;
        }
        return ans;
    }
}
