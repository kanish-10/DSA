public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {14, 9, 15, 12, 8, 6, 13};
        insertionSort(arr);
    }

    static void insertionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int j = i;
            while (j > 0 && arr[j - 1] > arr[j]) {
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }

        // for printing
        for (int x : arr) {
            System.out.print(x + " ");
        }
    }
}
