import java.util.ArrayList;

public class LeadersInArray {
    public static void main(String[] args) {
        int[] arr = {7, 10, 4, 10, 6, 5, 2};
        leader(arr);
    }

    static void leader(int[] arr) {
        ArrayList<Integer> ans = new ArrayList<>();
        int max = Integer.MIN_VALUE;
        for (int i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > max) ans.add(arr[i]);
            max = Math.max(max, arr[i]);
        }

        // printing
        for (Integer i : ans) {
            System.out.print(i + " ");
        }
    }
}