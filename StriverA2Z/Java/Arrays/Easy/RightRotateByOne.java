import java.util.Arrays;

public class RightRotateByOne {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        rightRotateByOne(arr);
    }

    static void rightRotateByOne(int[] arr) {
        int last = arr[arr.length - 1];
        for (int i = arr.length - 2; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }
        arr[0] = last;

        // printing
        System.out.println(Arrays.toString(arr));
    }
}
