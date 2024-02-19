public class MaximumProductSubarray {
    public static void main(String[] args) {
        int[] arr = {2, 3, -2, 4};
        maximumProductSubarray(arr);
    }

    static void maximumProductSubarray(int[] arr) {
        int pre = 1, suff = 1;
        int product = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (pre == 0) pre = 1;
            if (suff == 0) suff = 1;
            pre *= arr[i];
            suff *= arr[arr.length - i - 1];
            product = Math.max(product, Math.max(pre, suff));
        }
        System.out.println(product);
    }
}
