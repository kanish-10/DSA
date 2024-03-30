import java.util.ArrayList;
import java.util.List;

public class LeftView {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBT(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8}, 0);
        List<Integer> ans = new ArrayList<>();
        leftView(root, 0, ans);
        for (Integer i : ans) {
            System.out.print(i + " ");
        }
    }

    public static void leftView(Node root, int level, List<Integer> ans) {
        if (root == null) return;
        if (level == ans.size()) ans.add(root.data);
        leftView(root.left, level + 1, ans);
        leftView(root.right, level + 1, ans);
    }
}
