import java.util.ArrayList;
import java.util.Arrays;

public class RearrangeBySign {
    public static void main(String[] args) {
        int[] arr = {-3, 1, 2, -5, -2, -4};
        ifEqual(new int[]{3, 1, -2, -5, 2, -4});
        ifNotEqual(arr);
    }

    static void ifEqual(int[] arr) {
        int[] ans = new int[arr.length];
        int pos = 0;
        int neg = 1;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                ans[pos] = arr[i];
                pos += 2;
            } else {
                ans[neg] = arr[i];
                neg += 2;
            }
        }

        System.out.println(Arrays.toString(ans));
    }

    static void ifNotEqual(int[] arr) {
        ArrayList<Integer> pos = new ArrayList<>();
        ArrayList<Integer> neg = new ArrayList<>();
        int[] ans = new int[arr.length];

        for (int i : arr) {
            if (i >= 0) {
                pos.add(i);
            } else {
                neg.add(i);
            }
        }

        if (pos.size() > neg.size()) {
            for (int i = 0; i < neg.size(); i++) {
                ans[2 * i] = pos.get(i);
                ans[2 * i + 1] = neg.get(i);
            }
            int index = neg.size() * 2;
            for (int i = neg.size(); i < pos.size(); i++) {
                ans[index] = pos.get(i);
                index++;
            }
        } else {
            for (int i = 0; i < pos.size(); i++) {
                ans[2 * i] = pos.get(i);
                ans[2 * i + 1] = neg.get(i);
            }
            int index = pos.size() * 2;
            for (int i = pos.size(); i < neg.size(); i++) {
                ans[index] = neg.get(i);
                index++;
            }
        }

        System.out.println(Arrays.toString(ans));
    }
}