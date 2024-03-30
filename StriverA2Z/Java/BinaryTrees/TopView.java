import java.util.*;

public class TopView {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7});
        List<Integer> ans = topView(root);
        for (Integer i : ans) {
            System.out.print(i + " ");
        }
    }
    public static List<Integer> topView(Node root) {
        List<Integer> ans = new ArrayList<>();
        if (root == null) return ans;
        Queue<Pair> q = new LinkedList<>();
        TreeMap<Integer, Integer> mpp = new TreeMap<>();
        q.offer(new Pair(root, 0));
        while (!q.isEmpty()) {
            Pair p = q.poll();
            Node node = p.node;
            int level = p.num;
            if (!mpp.containsKey(level)) mpp.put(level, node.data);
            if (node.left != null) q.offer(new Pair(node.left, level -1));
            if (node.right != null) q.offer(new Pair(node.right, level + 1));
        }
        for (Map.Entry<Integer, Integer> i : mpp.entrySet()) {
            ans.add(i.getValue());
        }
        return ans;
    }
}
