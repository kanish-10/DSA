public class DiameterOfTree {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9});
        int[] diameter = new int[1];
        height(root, diameter);
        System.out.println(diameter[0]);
    }

    public static int height(Node root, int[] diameter) {
        if (root == null) return 0;
        int l = height(root.left, diameter);
        int r = height(root.right, diameter);
        diameter[0] = Math.max(l + r, diameter[0]);
        return 1 + Math.max(l, r);
    }
}
