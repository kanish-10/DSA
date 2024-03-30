import java.util.LinkedList;
import java.util.Queue;

public class MaximumWidth {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6});
        System.out.println(maximumWidth(root));
    }

    public static int maximumWidth(Node root) {
        int ans = 0;
        if (root == null) return ans;
        Queue<Pair> q = new LinkedList<>();
        q.offer(new Pair(root, 0));
        int last = 0, first = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            int min = q.peek().num;
            for (int i = 0; i < size; i++) {
                int curr = q.peek().num - min;
                Node node = q.peek().node;
                q.poll();
                if (i == 0) first = curr;
                if (i == size - 1) last = curr;
                if (node.left != null) q.offer(new Pair(node.left, 2 * curr + 1));
                if (node.right != null) q.offer(new Pair(node.right, 2 * curr + 2));
            }
            ans = Math.max(ans, last - first + 1);
        }
        return ans;
    }
}
