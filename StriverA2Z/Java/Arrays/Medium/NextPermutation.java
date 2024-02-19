import java.util.Arrays;

public class NextPermutation {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        nextPermutation(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void nextPermutation(int[] arr) {
        int ind = -1;

        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                ind = i;
                break;
            }
        }

        if (ind == -1) {
            System.out.println("ind is -1");
            reverse(arr, 0, arr.length - 1);
            return;
        }

        for (int i = arr.length - 1; i >= ind; i--) {
            if (arr[i] > arr[ind]) {
                int temp = arr[i];
                arr[i] = arr[ind];
                arr[ind] = temp;
                break;
            }
        }

        reverse(arr, ind + 1, arr.length - 1);
    }

    static void reverse(int[] arr, int start, int end) {
        while (start <= end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}