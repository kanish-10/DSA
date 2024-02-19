import java.util.ArrayList;

public class MergeSort {
    public static void main(String[] args) {
        int[] arr = {3, 1, 2, 4, 1, 5, 2, 6, 4};
        mergeSort(arr, 0, arr.length - 1);
        for (int x : arr) System.out.print(x + " ");
    }

    static void mergeSort(int[] arr, int low, int high) {
        if (low >= high) return;
        int mid = (low + high) / 2;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, high, mid);
    }

    static void merge(int[] arr, int low, int high, int mid) {
        ArrayList<Integer> intList = new ArrayList<>();
        int left = low;
        int right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                intList.add(arr[left]);
                left++;
            } else {
                intList.add(arr[right]);
                right++;
            }
        }
        while (left <= mid) {
            intList.add(arr[left]);
            left++;
        }
        while (right <= high) {
            intList.add(arr[right]);
            right++;
        }

        for (int i = low; i <= high; i++) {
            arr[i] = intList.get(i - low);
        }
    }
}
