public class BalancedTree {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 5, 6});
//        Node root = new Node(1);
//        root.left = new Node(2);
//        root.right = new Node(3);
//        root.left.left = new Node(4);
//        root.left.left.left = new Node(5);

        System.out.println(checkBalancedTree(root));
    }

    public static boolean checkBalancedTree(Node root) {
        return heightCheck(root) != -1;
    }

    public static int heightCheck(Node root) {
        if (root == null) return 0;
        int lh = heightCheck(root.left);
        if (lh == -1) return -1;
        int rh = heightCheck(root.right);
        if (rh == -1) return -1;
        if (Math.abs(lh - rh) > 1) return -1;
        return Math.max(lh, rh) + 1;
    }
}
