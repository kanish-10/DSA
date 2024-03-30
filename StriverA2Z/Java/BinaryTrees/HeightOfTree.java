public class HeightOfTree {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12});
        int length = heightOfBT(root);
        System.out.println(length);
    }

    static int heightOfBT(Node root) {
        if (root == null) return 0;
        int left = heightOfBT(root.left);
        int right = heightOfBT(root.right);
        return 1 + Math.max(left, right);
    }
}
