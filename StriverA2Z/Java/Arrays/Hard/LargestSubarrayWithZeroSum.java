import java.util.HashMap;

public class LargestSubarrayWithZeroSum {
    public static void main(String[] args) {
        int[] arr = {1, -1, 0, 0, 2};
        largestSubarrayZeroSum(arr);
    }

    static void largestSubarrayZeroSum(int[] arr) {
        HashMap<Integer, Integer> mpp = new HashMap<>();
        int maxi = 0;
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum == 0) {
                maxi = i + 1;
            } else {
                if (mpp.get(sum) != null) {
                    maxi = Math.max(maxi, mpp.get(sum));
                } else {
                    mpp.put(sum, i);
                }
            }
        }
        System.out.println(maxi);
    }
}
