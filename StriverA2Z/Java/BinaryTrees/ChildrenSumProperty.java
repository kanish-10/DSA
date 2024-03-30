public class ChildrenSumProperty {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{40, 10, 20, 2, 5, 30, 40});
        childrenSum(root);
        BinaryTreeOperations.inorderTraversal(root);
    }

    public static void childrenSum(Node root) {
        if (root == null) return;
        int child = 0;
        if (root.left != null) child += root.left.data;
        if (root.right != null) child += root.right.data;

        if (child >= root.data) root.data = child;
        else {
            if (root.left != null) root.left.data = root.data;
            if (root.right != null) root.right.data = root.data;
        }

        childrenSum(root.left);
        childrenSum(root.right);

        int tot = 0;
        if (root.left != null) tot += root.left.data;
        if (root.right != null) tot += root.right.data;
        if (root.left != null || root.right != null) root.data = tot;
    }
}
