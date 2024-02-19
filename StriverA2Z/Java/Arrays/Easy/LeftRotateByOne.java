import java.util.Arrays;

public class LeftRotateByOne{
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6};
        leftRotateByOne(arr);
    }

    static void leftRotateByOne(int[] arr) {
        int first = arr[0];
        for(int i = 1; i < arr.length; i++) {
            arr[i-1] = arr[i];
        }
        arr[arr.length - 1] = first;

        // printing
        System.out.println(Arrays.toString(arr));
    }
}