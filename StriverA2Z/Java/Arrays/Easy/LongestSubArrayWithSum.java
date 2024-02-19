import java.util.HashMap;
import java.util.Map;

public class LongestSubArrayWithSum {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 1, 1, 1, 4, 2, 3};
        longestSubArrayAll(arr, 3);
        longestSubArrayPositive(arr, 3);
    }

    static void longestSubArrayAll(int[] arr, int target) {
        int length = 0;
        int sum = 0;
        Map<Integer, Integer> presumMap = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum == target) length = Math.max(length, i + 1);

            int rem = sum - target;
            if (presumMap.containsKey(rem)) {
                int len = i - presumMap.get(rem);
                length = Math.max(len, length);
            }
            if (!presumMap.containsKey(sum)) {
                presumMap.put(sum, i);
            }
        }

        System.out.println("The longest subarray is: " + length);
    }

    static void longestSubArrayPositive(int[] arr, int target) {
        int left = 0;
        int right = 0;
        int length = 0;
        int sum = arr[0];

        while (right < arr.length) {
            while (left <= right && sum > target) {
                sum -= arr[left];
                left++;
            }
            if (sum == target) length = Math.max(length, right - left + 1);
            right++;
            if (right < arr.length) sum += arr[right];
        }
        System.out.println("The longest positive subarray is: " + length);
    }
}
