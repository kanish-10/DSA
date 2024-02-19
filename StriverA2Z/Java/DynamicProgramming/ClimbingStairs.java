public class ClimbingStairs {
    public static void main(String[] args) {
        System.out.println(climbStairsRecursive(3));
        System.out.println(climbStairs(3));
    }

    static int climbStairsRecursive(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;
        int left = climbStairsRecursive(n - 1);
        int right = climbStairsRecursive(n - 2);
        return left + right;
    }

    static long climbStairs(int n) {
        long prev = 1;
        long prev2 = 0;
        for (int i = 2; i <= n + 1; i++) {
            long curr = prev + prev2;
            prev2 = prev;
            prev = curr;
        }
        return prev;
    }
}
