public class AppearOnce {
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 3, 4, 3, 4, 5, 6, 7, 5, 7, 6};
        appearOnce(arr);
    }

    static void appearOnce(int[] arr) {
        int x = 0;
        for (int i : arr) {
            x ^= i;
        }
        System.out.println("The number which appeared twice is: " + x);
    }
}
