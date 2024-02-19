import java.util.HashMap;

public class NumberOfSubArraysWithSumK {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, -3, 1, 1, 1, 4, 2, -3};
        numberOfSubArrays(arr, 3);
    }

    static void numberOfSubArrays(int[] arr, int k) {
        HashMap<Integer, Integer> mpp = new HashMap<>();
        mpp.put(0, 1);
        int preSum = 0;
        int count = 0;

        for (int j : arr) {
            preSum += j;
            int remain = preSum - k;
            count += mpp.getOrDefault(remain, 0);
            mpp.put(preSum, mpp.getOrDefault(preSum, 0) + 1);
        }

        System.out.println(count);
    }
}
