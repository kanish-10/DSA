public class MissingAndRepeatingNumber {
    public static void main(String[] args) {
        int[] arr = {4, 3, 6, 2, 1, 1};
        optimalSumMethod(arr);
        optimalXorMethod(arr);
    }

    static void optimalSumMethod(int[] arr) {
        int n = arr.length;
        int nSum = (n * (n + 1)) / 2;
        int nSum2 = (n * (n + 1) * (2 * n + 1)) / 6;
        int sum = 0, sum2 = 0;
        for (int i : arr) {
            sum += i;
            sum2 += i * i;
        }
        int val1 = sum - nSum; // x-y
        int val2 = sum2 - nSum2;
        val2 /= val1;

        int rep = (val1 + val2) / 2;
        int miss = rep - val1;
        System.out.println("Missing :- " + miss);
        System.out.println("Repeating :- " + rep);
    }

    static void optimalXorMethod(int[] arr) {
        int n = arr.length;
        int xr = 0;
        for (int i = 0; i < n; i++) {
            xr ^= arr[i];
            xr ^= (i + 1);
        }
        int bitNo = 0;
        while (true) {
            if ((xr & (1 << bitNo)) != 0) {
                break;
            }
            bitNo++;
        }
        int zero = 0;
        int one = 0;

        for (int i = 0; i < n; i++) {
            if ((arr[i] & (1 << bitNo)) != 0) {
                one ^= arr[i];
            } else {
                zero ^= arr[i];
            }
            if (((i + 1) & (1 << bitNo)) != 0) {
                one ^= (i + 1);
            } else {
                zero ^= (i + 1);
            }
        }

        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == one) cnt++;
        }
        if (cnt == 2) {
            System.out.println("Missing :- " + zero);
            System.out.println("Repeating :- " + one);
            return;
        }
        System.out.println("Missing :- " + one);
        System.out.println("Repeating :- " + zero);
    }
}
