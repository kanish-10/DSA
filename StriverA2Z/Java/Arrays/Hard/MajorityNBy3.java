import java.util.ArrayList;

public class MajorityNBy3 {
    public static void main(String[] args) {
        int[] arr = {2, 2, 1, 3, 1, 1, 3, 1, 1};
        majorityNBy3(arr);
    }

    static void majorityNBy3(int[] arr) {
        int cnt1 = 0, cnt2 = 0, el1 = Integer.MIN_VALUE, el2 = Integer.MIN_VALUE;
        for (int i : arr) {
            if (cnt1 == 0 && el2 != i) {
                cnt1 = 1;
                el1 = i;
            } else if (cnt2 == 0 && el1 != i) {
                el2 = i;
                cnt2 = 1;
            } else if (el1 == i) {
                cnt1++;
            } else if (el2 == i) {
                cnt2++;
            } else {
                cnt1--;
                cnt2--;
            }
        }

        cnt1 = 0;
        cnt2 = 0;

        for (int i : arr) {
            if (el1 == i) cnt1++;
            if (el2 == i) cnt2++;
        }

        int min = (arr.length / 3) + 1;
        ArrayList<Integer> ls = new ArrayList<>();
        if (cnt1 >= min) ls.add(el1);
        if (cnt2 >= min) ls.add(el2);

        for (Integer i : ls) {
            System.out.println(i);
        }
    }
}
