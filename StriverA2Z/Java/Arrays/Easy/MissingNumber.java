public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 5, 6, 7};
        missingNumber(arr);
    }

    static void missingNumber(int[] arr) {
        int xor1 = 0;
        int xor2 = 0;
        int N = arr.length + 1;

        for (int i = 0; i < arr.length; i++) {
            xor1 ^= i + 1;
            xor2 ^= arr[i];
        }
        xor1 ^= N;

        System.out.println("The missing number using XOR method is: " + (xor1 ^ xor2));

        int sum = 0;
        int add = (N * (N + 1) / 2);

        for (int j : arr) {
            sum += j;
        }

        System.out.println("The missing number using SUM method is: " + (add - sum));
    }
}
