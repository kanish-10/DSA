import java.util.ArrayList;
import java.util.Arrays;

public class FourSum {
    public static void main(String[] args) {
        int[] arr = {1, 0, -1, 0, -2, 2};
        fourSum(arr, 0);
    }

    static void fourSum(int[] arr, int target) {
        Arrays.sort(arr);
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] == arr[i - 1]) continue;
            for (int j = i + 1; j < arr.length; j++) {
                if (j != i + 1 && arr[j] == arr[j - 1]) continue;
                int k = j + 1;
                int l = arr.length - 1;
                while (k < l) {
                    long sum = arr[i];
                    sum += arr[j];
                    sum += arr[k];
                    sum += arr[l];
                    if (sum == target) {
                        ArrayList<Integer> temp = new ArrayList<>();
                        temp.add(arr[i]);
                        temp.add(arr[j]);
                        temp.add(arr[k]);
                        temp.add(arr[l]);
                        ans.add(temp);
                        k++;
                        l--;
                        while (k < l && arr[k] == arr[k - 1]) k++;
                        while (k < l && arr[l] == arr[l + 1]) l--;
                    } else if (sum < target) k++;
                    else l--;
                }
            }
        }
        for (ArrayList<Integer> x : ans) {
            for (Integer i : x) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
    }
}
