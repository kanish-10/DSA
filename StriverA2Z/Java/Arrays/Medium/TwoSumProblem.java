import java.util.HashMap;

public class TwoSumProblem {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        twoSumHashMap(arr, target);
        twoSumSorted(arr, target);
    }

    static void twoSumHashMap(int[] arr, int target) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        boolean flag = true;
        for (int i = 0; i < arr.length; i++) {
            int rem = target - arr[i];
            if (hm.containsKey(rem)) {
                flag = false;
                System.out.println("[" + hm.get(rem) + "," + i + "]");
                break;
            }
            hm.put(arr[i], i);
        }
        if (flag) System.out.println("[-1,-1]");
    }

    static void twoSumSorted(int[] arr, int target) {
        int i = 0;
        int j = arr.length - 1;
        boolean flag = true;
        while (i < j) {
            int sum = arr[i] + arr[j];
            if (target == sum) {
                flag = false;
                System.out.println("YES");
                break;
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }
        if (flag) System.out.println("NO");
    }
}
