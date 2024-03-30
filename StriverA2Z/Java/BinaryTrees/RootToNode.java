import java.util.ArrayList;

public class RootToNode {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBTLevelOrder(new Integer[]{1, 2, 3, 4, 5, 6, 7});
        System.out.println(solve(root, 7));
    }

    public static ArrayList<Integer> solve(Node root, int x) {
        ArrayList<Integer> arr = new ArrayList<>();
        if (root == null) return arr;
        getPath(root, x, arr);
        return arr;
    }

    public static boolean getPath(Node root, int x, ArrayList<Integer> arr) {
        if (root == null) return false;
        arr.add(root.data);
        if (root.data == x) return true;
        if (getPath(root.left,x,arr) || getPath(root.right, x, arr)) {
            return true;
        }
        arr.remove(arr.size() - 1);
        return false;
    }
}
