import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class MinimumTimeToBurn {
    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.left.right = new Node(7);
        root.right.left = new Node(5);
        root.right.right = new Node(6);

        System.out.println(burningTime(root, 2));
    }

    public static Node markParents(Node root, Map<Node, Node> parentTrack, int start) {
        Node res = null;
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            Node cur = q.poll();
            if (start == cur.data) res = cur;
            if (cur.left != null) {
                q.offer(cur.left);
                parentTrack.put(cur.left, cur);
            }
            if (cur.right != null) {
                q.offer(cur.right);
                parentTrack.put(cur.right, cur);
            }
        }
        return res;
    }

    public static int findMaxDistance(Map<Node, Node> parentTrack, Node target) {
        Queue<Node> q = new LinkedList<>();
        Map<Node, Boolean> visited = new HashMap<>();
        q.offer(target);
        visited.put(target, true);
        int maxi = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            boolean fl = false;
            for (int i = 0; i < size; i++) {
                Node node = q.poll();
                if (node.left != null && visited.get(node.left) == null) {
                    fl = true;
                    q.offer(node.left);
                    visited.put(node.left, true);
                }
                if (node.right != null && visited.get(node.right) == null) {
                    fl = true;
                    q.offer(node.right);
                    visited.put(node.right, true);
                }
                if (parentTrack.get(node) != null && visited.get(parentTrack.get(node)) == null) {
                    fl = true;
                    q.offer(parentTrack.get(node));
                    visited.put(parentTrack.get(node), true);
                }
            }
            if (fl) maxi++;
        }
        return maxi;
    }

    public static int burningTime(Node root, int start) {
        Map<Node, Node> parentTrack = new HashMap<>();
        Node target = markParents(root, parentTrack, start);
        int ans = findMaxDistance(parentTrack, target);
        return ans;
    }
}
