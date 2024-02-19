public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        linearSearch(arr, 32);
    }

    static void linearSearch(int[] arr, int num) {
        boolean flag = true;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                System.out.println(arr[i] + " founded at index " + i);
                flag = false;
                break;
            }
        }
        if (flag) {
            System.out.println("-1 not found");
        }
    }
}
