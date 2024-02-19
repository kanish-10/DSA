// O(n) -TC

public class LargestElementInArray {
    public static void main(String[] args) {
        int[] arr = {3, 1, 2, 5, 4};
        largestElement(arr);
    }

    static void largestElement(int[] arr) {
        int largest = arr[0];
        for (int j : arr) {
            if (largest < j) {
                largest = j;
            }
        }
        System.out.println("The largest element in the array is: " + largest);
    }
}
