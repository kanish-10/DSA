import java.util.HashMap;

public class SubarrayWithXorK {
    public static void main(String[] args) {
        int[] arr = {5, 6, 7, 8, 9};
        subarrayXorK(arr, 5);
    }

    static void subarrayXorK(int[] arr, int target) {
        int xr = 0;
        HashMap<Integer, Integer> mpp = new HashMap<>();
        mpp.put(0, 1);
        int cnt = 0;
        for (int j : arr) {
            xr ^= j;
            int x = xr ^ target;
            cnt += mpp.getOrDefault(x, 0);
            mpp.put(xr, mpp.getOrDefault(xr, 0) + 1);
        }
        System.out.println(cnt);
    }
}
