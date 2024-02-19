import java.util.HashSet;

public class LongestConsecutiveSequence {
    public static void main(String[] args) {
        int[] arr = {100, 1, 2, 101, 102, 2, 3, 4, 4};
        longestSequence(arr);
    }

    static void longestSequence(int[] arr) {
        int longest = 1;
        HashSet<Integer> st = new HashSet<>();
        for (int i : arr) {
            st.add(i);
        }

        for (Integer i : st) {
            if (!st.contains(i - 1)) {
                int cnt = 1;
                int x = i;
                while (st.contains(x + 1)) {
                    cnt++;
                    x++;
                }
                longest = Math.max(longest, cnt);
            }
        }

        System.out.println("The longest consecutive sequence is " + longest);
    }
}
