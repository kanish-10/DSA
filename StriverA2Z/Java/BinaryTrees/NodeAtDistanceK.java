import com.sun.source.tree.Tree;

import java.util.*;

public class NodeAtDistanceK {
    public static void main(String[] args) {
        Node root = new Node(3);
        root.left = new Node(5);
        root.right = new Node(1);
        root.left.left = new Node(6);
        root.left.right = new Node(2);
        root.left.right.left = new Node(7);
        root.left.right.right = new Node(4);
        root.right.left = new Node(0);
        root.right.right = new Node(8);

        List<Integer> ans = distanceK(root, root.left, 2);
        for (int i : ans) {
            System.out.println(i + " ");
        }
    }

    public static List<Integer> distanceK(Node root, Node target, int k) {
        Map<Node, Node> parentTrack = new HashMap<>();
        markParents(root, parentTrack);
        Queue<Node> q = new LinkedList<>();
        Map<Node, Boolean> visited = new HashMap<>();
        q.offer(target);
        visited.put(target, true);
        int cur = 0;
        while (!q.isEmpty()) {
            if (cur == k) break;
            cur++;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                Node node = q.poll();
                if (node.left != null && visited.get(node.left) == null) {
                    q.offer(node.left);
                    visited.put(node.left, true);
                }
                if (node.right != null && visited.get(node.right) == null) {
                    q.offer(node.right);
                    visited.put(node.right, true);
                }
                if (parentTrack.get(node) != null && visited.get(parentTrack.get(node)) == null) {
                    q.offer(parentTrack.get(node));
                    visited.put(parentTrack.get(node), true);
                }
            }
        }
        List<Integer> result = new ArrayList<>();
        while (!q.isEmpty()) {
            Node t = q.poll();
            result.add(t.data);
        }
        return result;
    }

    public static void markParents(Node root, Map<Node, Node> parentTrack) {
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            Node curr = q.poll();
            if (curr.left != null) {
                parentTrack.put(curr.left, curr);
                q.offer(curr.left);
            }
            if (curr.right != null) {
                parentTrack.put(curr.right, curr);
                q.offer(curr.right);
            }
        }
    }
}
