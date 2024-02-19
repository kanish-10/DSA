import java.util.*;

public class MergeOverlappingSubintervals {
    public static void main(String[] args) {
        int[][] arr = {{1, 3}, {2, 6}, {8, 9}, {9, 11}, {8, 10}, {2, 4}, {15, 18}, {16, 17}};
        mergeOverlappingSubintervals(arr);
    }

    static void mergeOverlappingSubintervals(int[][] arr) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(arr, new Comparator<int[]>() {
            @Override
            public int compare(int[] row1, int[] row2) {
                // Compare based on the first element of each row
                return Integer.compare(row1[0], row2[0]);
            }
        });
        for (int i = 0; i < arr.length; i++) {
            if (ans.isEmpty() || ans.get(ans.size() - 1).get(1) < arr[i][0]) {
                List<Integer> temp = new ArrayList<>();
                temp.add(arr[i][0]);
                temp.add(arr[i][1]);
                ans.add(temp);
            } else {
                ans.get(ans.size() - 1).set(1, Math.max(ans.get(ans.size() - 1).get(1), arr[i][1]));
            }
        }

        for (List<Integer> i : ans) {
            System.out.println(i);
        }
    }
}
