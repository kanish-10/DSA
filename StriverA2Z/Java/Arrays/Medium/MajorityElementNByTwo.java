public class MajorityElementNByTwo {
    static void majorityElement(int[] arr) {
        int el = arr[0];
        int count = 0;
        for (int k : arr) {
            if (count == 0) {
                count = 1;
                el = k;
            } else if (k == el) {
                count++;
            } else {
                count--;
            }
        }
        int cnt = 0;
        for (int j : arr) {
            if (j == el) {
                cnt++;
            }
        }

        if (cnt > arr.length / 2) {
            System.out.println(el);
        } else {
            System.out.println(-1);
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 2, 1, 3, 1, 1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3};
        majorityElement(arr);
    }
}
