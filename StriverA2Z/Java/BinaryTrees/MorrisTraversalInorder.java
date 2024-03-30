import java.util.ArrayList;

public class MorrisTraversalInorder {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8});
        getInorder(root);
    }

    public static void getInorder(Node root) {
        ArrayList<Integer> inorder = new ArrayList<>();
        Node cur = root;
        while (cur != null) {
            if (cur.left == null) {
                inorder.add(cur.data);
                cur = cur.right;
            } else {
                Node prev = cur.left;
                while (prev.right != null && prev.right != cur) {
                    prev = prev.right;
                }
                if (prev.right == null) {
                    prev.right = cur;
                    cur = cur.left;
                } else {
                    prev.right = null;
                    inorder.add(cur.data);
                    cur = cur.right;
                }
            }
        }
        for (int i : inorder) {
            System.out.print(i + " ");
        }
    }
}
