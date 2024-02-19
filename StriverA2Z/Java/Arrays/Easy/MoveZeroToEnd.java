import java.util.Arrays;

public class MoveZeroToEnd {
    public static void main(String[] args) {
        int[] arr = {1, 2, 0, 0, 0, 0, 4, 3, 0, 5, 0, 0, 0};
        moveToZero(arr);
    }

    static void moveToZero(int[] arr) {
        int j = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                j = i;
                break;
            }
        }
        if (j == -1 || j == arr.length - 1) {
            System.out.println(Arrays.toString(arr));
        }
        for (int i = j + 1; i < arr.length; i++) {
            if (arr[i] != 0) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            }
        }

        // printing
        System.out.println(Arrays.toString(arr));
    }
}
