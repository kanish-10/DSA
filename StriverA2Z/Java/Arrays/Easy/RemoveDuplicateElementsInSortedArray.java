public class RemoveDuplicateElementsInSortedArray {
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 3, 3, 4, 7, 7, 8};
        removeduplicates(arr);
    }

    static void removeduplicates(int[] arr) {
        int i = 0;
        for (int j = 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                arr[i + 1] = arr[j];
                i++;
            }
        }
        i++;

        // printing purpose only
        for (int x = 0; x < i; x++) {
            System.out.print(arr[x] + " ");
        }
    }
}
