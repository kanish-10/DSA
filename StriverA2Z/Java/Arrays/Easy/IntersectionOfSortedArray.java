import java.util.ArrayList;

public class IntersectionOfSortedArray {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 3, 4, 5, 8};
        int[] arr2 = {2, 3, 3, 5, 6, 7, 8};

        intersection(arr1, arr2);
    }

    static void intersection(int[] a, int[] b) {
        int i = 0;
        int j = 0;
        ArrayList<Integer> intersectionArr = new ArrayList<>();

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                i++;
            } else if (b[j] < a[i]) {
                j++;
            } else {
                intersectionArr.add(a[i]);
                i++;
                j++;
            }
        }

        for (Integer integer : intersectionArr) {
            System.out.print(integer + " ");
        }
    }
}
