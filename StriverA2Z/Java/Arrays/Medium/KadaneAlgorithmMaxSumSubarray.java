public class KadaneAlgorithmMaxSumSubarray {
    public static void main(String[] args) {
        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
        kadaneAlgorithm(arr);
    }

    static void kadaneAlgorithm(int[] arr) {
        int sum = 0;
        int max = Integer.MIN_VALUE;
        int start = 0, ansStart = -1, ansEnd = -1;
        for (int i = 0; i < arr.length; i++) {
            if (sum == 0) start = i;
            sum += arr[i];
            if (max < sum) {
                max = sum;
                ansStart = start;
                ansEnd = i;
            }
            if (sum < 0) {
                sum = 0;
            }
        }
        for (int i = ansStart; i <= ansEnd; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("Maximum sum sub array is " + max);
    }
}
