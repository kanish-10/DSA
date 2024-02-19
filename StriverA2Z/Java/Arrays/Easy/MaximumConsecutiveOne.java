public class MaximumConsecutiveOne {
    static public void main(String[] args) {
        int[] arr = {1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1};
        maximumOne(arr);
    }

    static void maximumOne(int[] arr) {
        int counter = 0;
        int maximum = 0;
        for (int j : arr) {
            if (j == 1) {
                counter++;
                maximum = Math.max(counter, maximum);
            } else {
                counter = 0;
            }
        }
        System.out.println("The maximum number of consecutive 1 is " + maximum);
    }
}
