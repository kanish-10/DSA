import java.util.ArrayList;
import java.util.Collections;

public class MorrisTraversalPostorder {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8});
        getPostorder(root);
    }

    public static void getPostorder(Node root) {
        ArrayList<Integer> postorder = new ArrayList<>();
        Node cur = root;
        while (cur != null) {
            if (cur.right == null) {
                postorder.add(cur.data);
                cur = cur.left;
            } else {
                Node prev = cur.right;
                while (prev.left != null && prev.left != cur) {
                    prev = prev.left;
                }
                if (prev.left == null) {
                    prev.left = cur;
                    postorder.add(cur.data);
                    cur = cur.right;
                } else {
                    prev.left = null;
                    cur = cur.left;
                }
            }
        }
        Collections.reverse(postorder);
        for (int i : postorder) {
            System.out.print(i + " ");
        }
    }
}
