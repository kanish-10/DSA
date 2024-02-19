public class IsSorted {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 3, 4, 5, 6, 7};
        isSorted(arr);
    }

    static void isSorted(int[] arr) {
        boolean flag = false;
        for (int i = 0; i < arr.length - 2; i++) {
            if (arr[i] <= arr[i + 1]) {
                continue;
            } else {
                flag = true;
                break;
            }
        }
        if (flag) {
            System.out.println("The array is not sorted");
        } else {
            System.out.println("The array is sorted");
        }
    }
}
