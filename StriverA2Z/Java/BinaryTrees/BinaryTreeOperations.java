import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BinaryTreeOperations {
    public static void main(String[] args) {
        Node root = arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7});

        preorderTraversal(root);
        System.out.println();

        inorderTraversal(root);
        System.out.println();

        postorderTraversal(root);
        System.out.println();

        levelOrder(root);
        System.out.println();

        preorderTraversalIterative(root);
        System.out.println();

        inorderTraversalIterative(root);
        System.out.println();

        postorderTraversalIterative2Stack(root);
        System.out.println();

        postorderTraversalIterative1Stack(root);
        System.out.println();

        preInPostTraversal(root);
    }

    public static void preorderTraversal(Node node) {
        if (node == null) return;
        System.out.print(node.data + " ");
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }

    public static void inorderTraversal(Node node) {
        if (node == null) return;
        inorderTraversal(node.left);
        System.out.print(node.data + " ");
        inorderTraversal(node.right);
    }

    public static void postorderTraversal(Node node) {
        if (node == null) return;
        postorderTraversal(node.left);
        postorderTraversal(node.right);
        System.out.print(node.data + " ");
    }

    public static Node arrayToBTLevelOrder(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;

        Node root = new Node(arr[0]);
        int i = 0;

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty() && i < (arr.length / 2)) {
            Node t = q.poll();

            Node left = new Node(arr[2 * i + 1]);
            t.left = left;
            q.offer(left);

            if ((2 * i + 2) != arr.length) {
                Node right = new Node(arr[2 * i + 2]);
                t.right = right;
                q.offer(right);
            }
            i++;
        }
        return root;
    }

    public static void levelOrder(Node root) {
        if (root == null) return;
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        System.out.print(root.data + " ");
        while (!q.isEmpty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                Node node = q.peek();
                q.poll();
                if (node.left != null) System.out.print(node.left.data + " ");
                if (node.right != null) System.out.print(node.right.data + " ");
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
        }
    }

    public static void preorderTraversalIterative(Node root) {
        if (root == null) return;
        Stack<Node> st = new Stack<>();
        st.push(root);
        while (!st.isEmpty()) {
            Node node = st.pop();
            System.out.print(node.data + " ");
            if (node.right != null) st.push(node.right);
            if (node.left != null) st.push(node.left);
        }
    }

    public static void inorderTraversalIterative(Node root) {
        if (root == null) return;
        Stack<Node> st = new Stack<>();
        Node node = root;
        while (true) {
            if (node != null) {
                st.push(node);
                node = node.left;
            } else {
                if (st.isEmpty()) break;
                node = st.pop();
                System.out.print(node.data + " ");
                node = node.right;
            }
        }
    }

    public static void postorderTraversalIterative2Stack(Node root) {
        if (root == null) return;
        Stack<Node> st1 = new Stack<>();
        Stack<Node> st2 = new Stack<>();
        st1.push(root);
        while (!st1.isEmpty()) {
            Node node = st1.pop();
            st2.push(node);
            if (node.left != null) st1.push(node.left);
            if (node.right != null) st1.push(node.right);
        }
        while (!st2.isEmpty()) {
            System.out.print(st2.peek().data + " ");
            st2.pop();
        }
    }

    public static void postorderTraversalIterative1Stack(Node root) {
        if (root == null) return;
        Stack<Node> st = new Stack<>();
        Node curr = root;
        while (curr != null || !st.isEmpty()) {
            if (curr != null) {
                st.push(curr);
                curr = curr.left;
            } else {
                Node temp = st.peek().right;
                if (temp == null) {
                    temp = st.pop();
                    System.out.print(temp.data + " ");
                    while (!st.isEmpty() && temp == st.peek().right) {
                        temp = st.pop();
                        System.out.print(temp.data + " ");
                    }
                } else {
                    curr = temp;
                }
            }
        }
    }

    public static void preInPostTraversal(Node root) {
        if (root == null) return;
        Stack<Pair> st = new Stack<>();
        ArrayList<Integer> pre = new ArrayList<>();
        ArrayList<Integer> in = new ArrayList<>();
        ArrayList<Integer> post = new ArrayList<>();
        st.push(new Pair(root, 1));
        while (!st.isEmpty()) {
            Pair it = st.pop();
            if (it.num == 1) {
                pre.add(it.node.data);
                it.num++;
                st.push(it);
                if (it.node.left != null) st.push(new Pair(it.node.left, 1));
            } else if (it.num == 2) {
                in.add(it.node.data);
                it.num++;
                st.push(it);
                if (it.node.right != null) st.push(new Pair(it.node.right, 1));
            } else {
                post.add(it.node.data);
            }
        }

        for (int i : pre) {
            System.out.print(i + " ");
        }
        System.out.println();

        for (int i : in) {
            System.out.print(i + " ");
        }
        System.out.println();

        for (int i : post) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static Node arrayToBT(Integer[] arr, int index) {
        if (index >= arr.length || (arr[index] == -1)) return null;
        Node root = new Node(arr[index]);
        root.left = arrayToBT(arr, 2 * index + 1);
        root.right = arrayToBT(arr, 2 * index + 2);
        return root;
    }
}
