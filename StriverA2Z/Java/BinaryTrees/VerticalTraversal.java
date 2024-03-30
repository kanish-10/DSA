import com.sun.source.tree.Tree;

import java.util.*;

public class VerticalTraversal {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7});
        List<List<Integer>> ans = verticalTraversal(root);
        for (List<Integer> a : ans) {
            for (Integer i : a) {
                System.out.print(i + " ");
            }
        }
    }

    public static List<List<Integer>> verticalTraversal(Node root) {
        Queue<Tuple> q = new LinkedList<>();
        TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> nodes = new TreeMap<>();
        q.offer(new Tuple(root, 0, 0));
        while (!q.isEmpty())  {
            Tuple tuple = q.poll();
            Node node = tuple.node;
            int vertical = tuple.vertical;
            int level = tuple.level;
            if(!nodes.containsKey(vertical)) {
                nodes.put(vertical, new TreeMap<>());
            }
            if (!nodes.get(vertical).containsKey(level)) {
                nodes.get(vertical).put(level, new PriorityQueue<>());
            }
            nodes.get(vertical).get(level).offer(node.data);
            if (node.left != null) {
                q.offer(new Tuple(node.left, vertical - 1, level + 1));
            }
            if (node.right != null) {
                q.offer(new Tuple(node.right, vertical + 1, level + 1));
            }
        }
        List<List<Integer>> list = new ArrayList<>();
        for (TreeMap<Integer, PriorityQueue<Integer>> mpp : nodes.values()) {
            list.add(new ArrayList<>());
            for (PriorityQueue<Integer> j : mpp.values()) {
                while (!j.isEmpty()) {
//                    System.out.print(j.peek());
                    list.get(list.size() - 1).add(j.poll());
                }
            }
        }
        return list;
    }
}
