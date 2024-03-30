public class FlattenBTToLL {
    public static void main(String[] args) {

    }

    public void flatten(Node root) {
        Node cur = root;
        while (cur != null) {
            if (cur.left != null) {
                Node prev = cur.left;
                while (prev.right != null) prev = prev.right;
                prev.right = cur.right;
                cur.right = cur.left;
                cur.left = null;
            }
            cur = cur.right;
        }
    }
}
