public class Symmetric {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 2, 3, 4, 4, 3});
        System.out.print(isSymmetric(root));
    }

    public static boolean isSymmetric(Node root) {
        return root == null || isSymmetricHelp(root.left, root.right);
    }

    public static boolean isSymmetricHelp(Node left, Node right) {
        if (left == null || right == null) return left == right;
        if (left.data != right.data) return false;
        return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
    }
}
