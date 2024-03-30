import java.util.HashMap;
import java.util.Map;

public class BuildTreeUsingInorderAndPostorder {
    public static void main(String[] args) {
        Node root = buildTree(new int[]{40, 50, 20, 60, 30, 10}, new int[]{40, 20, 50, 10, 60, 30});
        BinaryTreeOperations.postorderTraversal(root);
        System.out.println();
        BinaryTreeOperations.inorderTraversal(root);
    }

    public static Node buildTree(int[] postorder, int[] inorder) {
        Map<Integer, Integer> inMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            inMap.put(inorder[i], i);
        }
        Node root = buildTree(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1, inMap);
        return root;
    }

    public static Node buildTree(int[] postorder, int postStart, int postEnd, int[] inorder, int inStart, int inEnd, Map<Integer, Integer> inMap) {
        if (postStart > postEnd || inStart > inEnd) return null;
        Node root = new Node(postorder[postEnd]);
        int inRoot = inMap.get(root.data);
        int number = inRoot - inStart;
        root.left = buildTree(postorder, postStart, postStart + number - 1, inorder, inStart, inRoot - 1, inMap);
        root.right = buildTree(postorder, postStart + number, postEnd - 1, inorder, inRoot + 1, inEnd, inMap);
        return root;
    }
}
