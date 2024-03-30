public class CheckIdentical {
    public static void main(String[] args) {
        Node root1 = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4});
        Node root2 = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4});
        System.out.println(check(root1, root2));
    }

    public static boolean check(Node root1, Node root2) {
        if (root1 == null || root2 == null) return root1 == root2;
        return (root1.data == root2.data) && (check(root1.left, root2.left)) && (check(root1.right, root2.right));
    }
}
