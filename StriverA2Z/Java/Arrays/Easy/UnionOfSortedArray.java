import java.util.ArrayList;

public class UnionOfSortedArray {
    public static void main(String[] args) {
        int[] arr1 = {1, 1, 2, 2, 3, 4, 5};
        int[] arr2 = {1, 2, 2, 3, 4, 4, 5, 6, 7};

        unionArray(arr1, arr2);
    }

    static void unionArray(int[] arr1, int[] arr2) {
        int i = 0;
        int j = 0;
        ArrayList<Integer> unionArr = new ArrayList<>();

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                if (unionArr.isEmpty() || unionArr.get(unionArr.size() - 1) != arr1[i]) {
                    unionArr.add(arr1[i]);
                }
                i++;
            } else {
                if (unionArr.isEmpty() || unionArr.get(unionArr.size() - 1) != arr2[j]) {
                    unionArr.add(arr2[j]);
                }
                j++;
            }
        }

        while (i < arr1.length) {
            if (unionArr.get(unionArr.size() - 1) != arr1[i]) {
                unionArr.add(arr1[i]);
            }
            i++;
        }

        while (j < arr2.length) {
            if (unionArr.get(unionArr.size() - 1) != arr2[j]) {
                unionArr.add(arr2[j]);
            }
            j++;
        }

        for (Integer integer : unionArr) {
            System.out.print(integer + " ");
        }
    }
}
