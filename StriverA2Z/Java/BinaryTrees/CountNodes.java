public class CountNodes {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8});
        System.out.println(countNodes(root));
    }

    public static int countNodes(Node root) {
        if (root == null) return 0;
        int lh = leftHeight(root);
        int rh = rightHeight(root);
        if (lh == rh) return (int) (Math.pow(2, lh) - 1);
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    public static int leftHeight(Node node) {
        int h = 0;
        while (node != null) {
            h++;
            node = node.left;
        }
        return h;
    }

    public static int rightHeight(Node node) {
        int h = 0;
        while (node != null) {
            h++;
            node = node.right;
        }
        return h;
    }
}
