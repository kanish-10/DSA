import java.util.*;

public class ZigZagTraversal {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11});
//        ArrayList<ArrayList<Integer>> result = zigzagLevelOrder(root);
//        for (ArrayList<Integer> x : result) {
//            for (Integer i : x) {
//                System.out.print(i + " ");
//            }
//        }
        List<List<Integer>> res = zigZagTraversal(root);
        for (List<Integer> x : res) {
            for (Integer i : x) {
                System.out.print(i + " ");
            }
        }
    }

    public static List<List<Integer>> zigZagTraversal(Node root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        boolean left = true;

        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> row = new ArrayList<Integer>();
            for (int i = 0; i < size; i++) {
                Node node = q.poll();
                if (left) row.add(node.data);
                else row.add(0, node.data);
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
            left = !left;
            result.add(row);
        }
        return result;
    }
}
