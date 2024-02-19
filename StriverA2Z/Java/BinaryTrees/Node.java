public class Node {
    int data;
    Node left;
    Node right;

    public Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Pair {
    Node node;
    int num;
    public Pair(Node node, int num) {
        this.num = num;
        this.node = node;
    }
}
