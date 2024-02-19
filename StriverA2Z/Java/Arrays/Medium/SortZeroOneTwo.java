import java.util.Arrays;

public class SortZeroOneTwo {
    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 2, 1, 0, 1, 0, 2, 0, 2};
        dutchNationalFlagAlgorithm(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int[] arr, int start, int end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    static void dutchNationalFlagAlgorithm(int[] arr) {
        int low = 0;
        int mid = 0;
        int high = arr.length - 1;
        while (mid <= high) {
            if (arr[mid] == 0) {
                swap(arr, low, mid);
                low++;
                mid++;
            } else if (arr[mid] == 1) {
                mid++;
            } else {
                swap(arr, mid, high);
                high--;
            }
        }
    }
}
