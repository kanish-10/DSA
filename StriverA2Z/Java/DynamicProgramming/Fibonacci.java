import java.util.Arrays;

public class Fibonacci {
    public static void main(String[] args) {
        int[] arr = new int[6];
        Arrays.fill(arr, -1);
        System.out.println(fibMem(5, arr));
        System.out.println(fibTab(5));
        System.out.println(fib(5));
    }

    static int fibMem(int n, int[] arr) {
        if (n <= 1) return n;
        if (arr[n] != -1) return arr[n];
        arr[n] = fibMem(n - 1, arr) + fibMem(n - 2, arr);
        return arr[n];
    }

    static int fibTab(int n) {
        int[] arr = new int[n + 1];
        arr[0] = 0;
        arr[1] = 1;
        for (int i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n];
    }

    static int fib(int n) {
        int prev = 1;
        int prev2 = 0;
        for (int i = 2; i <= n; i++) {
            int curr = prev + prev2;
            prev2 = prev;
            prev = curr;
        }
        return prev;
    }
}
