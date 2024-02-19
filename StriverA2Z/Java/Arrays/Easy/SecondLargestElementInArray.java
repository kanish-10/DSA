public class SecondLargestElementInArray {
    public static void main(String[] args) {
        int[] arr = {1, 23, 54, 8, 5, 7};
        secondLargest(arr);
    }

    static void secondLargest(int[] arr) {
        int largest = arr[0];
        int sLargest = arr[0];
        for (int j : arr) {
            if (j > largest) {
                sLargest = largest;
                largest = j;
            }
            if (j < largest && j > sLargest) {
                sLargest = j;
            }
        }
        System.out.println("Second Largest element in array is: " + sLargest);
    }
}
