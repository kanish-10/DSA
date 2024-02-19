import java.util.Arrays;

public class RightRotateByN {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        rightRotateByN(arr, 2);
    }

    static void rightRotateByN(int[] arr, int rotate) {
        rotate = rotate % arr.length;
        reverseArray(arr, arr.length - rotate, arr.length - 1);
        reverseArray(arr, 0, arr.length - rotate - 1);
        reverseArray(arr, 0, arr.length - 1);

        // printing
        System.out.println(Arrays.toString(arr));
    }

    static void reverseArray(int[] arr, int start, int end) {
        while (start <= end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
