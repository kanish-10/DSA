public class LowestCommonAncestor {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[] {1,2,3,4,5,6,7,8,9});
        System.out.println(getPath(root, 1,7));
    }

    public static int getPath(Node root, int a, int b) {
        if (root == null) return Integer.MIN_VALUE;
        if (root.data == a) return a;
        if (root.data == b) return b;
        int left = getPath(root.left, a, b);
        int right = getPath(root.right, a, b);
        if (left != Integer.MIN_VALUE && right != Integer.MIN_VALUE) return root.data;
        return Math.max(left, right);
    }

    public static Node lca(Node root, Node a, Node b) {
        if (root == null || root == a || root == b) return root;
        Node left = lca(root.left, a, b);
        Node right = lca(root.right, a, b);
        if (left == null) return right;
        else if (right == null) return left;
        else return root;
    }
}
