import java.util.ArrayList;

public class BoundaryTraversal {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7});
        ArrayList<Integer> result = new ArrayList<>();
        boundaryTraversal(root, result);
        for (Integer i : result) {
            System.out.print(i + " ");
        }
    }

    public static boolean isLeaf(Node root) {
        return root.left == null && root.right == null;
    }

    public static void leftBoundary(Node root, ArrayList<Integer> result) {
        Node cur = root.left;
        while (cur != null) {
            if (!isLeaf(cur)) result.add(cur.data);
            if (cur.left != null) cur = cur.left;
            else cur = cur.right;
        }
    }

    public static void rightBoundary(Node root, ArrayList<Integer> result) {
        Node cur = root.right;
        ArrayList<Integer> temp = new ArrayList<>();
        while (cur != null) {
            if (!isLeaf(cur)) temp.add(cur.data);
            if (cur.right != null) cur = cur.right;
            else cur = cur.left;
        }
        for (int i = temp.size() - 1; i >= 0; i--) {
            result.add(temp.get(i));
        }
    }

    public static void leafNode(Node root, ArrayList<Integer> result) {
        if (isLeaf(root)) {
            result.add(root.data);
            return;
        }
        if (root.left != null) leafNode(root.left, result);
        if (root.right != null) leafNode(root.right, result);
    }

    public static void boundaryTraversal(Node root, ArrayList<Integer> result) {
        if (!isLeaf(root)) result.add(root.data);
        leftBoundary(root, result);
        leafNode(root, result);
        rightBoundary(root, result);
    }
}
