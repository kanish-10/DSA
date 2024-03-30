import java.util.*;

public class RightView {
    public static void main(String[] args) {
        Node root = BinaryTreeOperations.arrayToBT(new Integer[] {1,2,3,4,5,6,7,8}, 0);
        List<Integer> ans = new ArrayList<>();
        rightView(root, 0, ans);
        for (Integer i: ans) {
            System.out.print(i + " ");
        }
        System.out.println();

    }

    public static void rightView(Node root, int level, List<Integer> ans) {
        if (root == null) return;
        if (level == ans.size()) ans.add(root.data);
        rightView(root.right, level + 1, ans);
        rightView(root.left, level + 1, ans);
    }

}
