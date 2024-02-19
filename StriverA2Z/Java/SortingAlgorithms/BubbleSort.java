public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {13, 46, 24, 52, 20, 9};
        bubbleSort(arr);
    }

    static void bubbleSort(int[] arr) {
        for (int i = arr.length - 1; i >= 1; i--) {
            boolean didSwap = false;
            for (int j = 0; j <= i - 1; j++) {
                if (arr[j + 1] < arr[j]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    didSwap = true;
                }
            }
            if (!didSwap) {
                return;
            }
        }

        // for printing
        for (int x : arr) {
            System.out.print(x + " ");
        }
    }
}
