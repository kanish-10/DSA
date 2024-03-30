import java.util.*;

public class SerializeAndDeserialize {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[] {1,2,3,4,5,6,7,8});
        String s = serialize(root);
        Node root1 = deserialize(s);
        BinaryTreeOperations.levelOrder(root1);
    }
    public static String serialize(Node root) {
        if (root == null) return "";
        Queue<Node> q = new LinkedList<>();
        StringBuilder res = new StringBuilder();
        q.add(root);
        while (!q.isEmpty()) {
            Node node = q.poll();
            if (node == null) {
                res.append("n ");
                continue;
            }
            res.append(node.data).append(" ");
            q.add(node.left);
            q.add(node.right);
        }
        return res.toString();
    }

    public static Node deserialize(String data) {
        if (data == "") return null;
        Queue<Node> q = new LinkedList<>();
        String[] values = data.split(" ");
        Node root = new Node(Integer.parseInt(values[0]));
        q.add(root);
        for (int i = 1; i < values.length; i++) {
            Node parent = q.poll();
            if (!values[i].equals("n")) {
                Node left = new Node(Integer.parseInt(values[i]));
                parent.left = left;
                q.add(left);
            }
            if (!values[++i].equals("n")) {
                Node right = new Node(Integer.parseInt(values[i]));
                parent.right = right;
                q.add(right);
            }
        }
        return root;
    }
}
