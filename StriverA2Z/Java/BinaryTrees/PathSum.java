public class PathSum {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{10, 20, 30, 40, 50, 60, 70});
        int pathSum = pathSum(root);
        System.out.println(pathSum);
    }

    public static int pathSum(Node root) {
        int[] sum = new int[1];
        sum[0] = Integer.MIN_VALUE;
        heightOfBT(root, sum);
        return sum[0];
    }

    public static int heightOfBT(Node root, int[] sum) {
        if (root == null) return 0;
        int left = Math.max(0, heightOfBT(root.left, sum));
        int right = Math.max(0, heightOfBT(root.right, sum));
        sum[0] = Math.max(sum[0], left + right + root.data);
        return root.data + Math.max(left, right);
    }
}
