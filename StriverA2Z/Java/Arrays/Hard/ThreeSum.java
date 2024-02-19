import java.util.ArrayList;
import java.util.Arrays;

public class ThreeSum {
    public static void main(String[] args) {
        int[] arr = {-1, -1, 2, 0, 1};
        threeSum(arr);
    }

    static void threeSum(int[] arr) {
        ArrayList<int[]> ans = new ArrayList<>();
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] == arr[i - 1]) continue;
            int j = i + 1;
            int k = arr.length - 1;
            while (j < k) {
                int sum = arr[i] + arr[j] + arr[k];
                if (sum < 0) j++;
                else if (sum > 0) k--;
                else {
                    int[] temp = {arr[i], arr[j], arr[k]};
                    ans.add(temp);
                    j++;
                    k--;
                    while (j < k && arr[j] == arr[j - 1]) j++;
                    while (j < k && arr[k] == arr[k + 1]) k--;
                }
            }
        }

        for (int[] i : ans) {
            System.out.println(Arrays.toString(i));
        }
    }
}
