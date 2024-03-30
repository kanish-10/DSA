import java.util.HashMap;
import java.util.Map;

public class BuildTreeUsingInorderAndPreorder {
    public static void main(String[] args) {
        Node root = buildTree(new int[]{10, 20, 40, 50, 30, 60}, new int[]{40, 20, 50, 10, 60, 30});
        BinaryTreeOperations.inorderTraversal(root);
        System.out.println();
        BinaryTreeOperations.preorderTraversal(root);
    }

    public static Node buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> inMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            inMap.put(inorder[i], i);
        }
        Node root = buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);
        return root;
    }

    public static Node buildTree(int[] preorder, int preStart, int preEnd, int[] inorder, int inStart, int inEnd, Map<Integer, Integer> inMap) {
        if (preStart > preEnd || inStart > inEnd) return null;
        Node root = new Node(preorder[preStart]);
        int inRoot = inMap.get(root.data);
        int number = inRoot - inStart;
        root.left = buildTree(preorder, preStart + 1, preStart + number, inorder, inStart, inRoot - 1, inMap);
        root.right = buildTree(preorder, preStart + number + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);
        return root;
    }
}
