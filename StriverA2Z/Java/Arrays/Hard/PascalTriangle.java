import java.util.ArrayList;

public class PascalTriangle {
    public static void main(String[] args) {
        nCr(5, 3);
        pascalRow(5);
        pascalTriangle(5);
    }

    // This function returns a particular element of pascal triangle.
    static void nCr(int row, int col) {
        long res = 1;
        row--;
        col--;
        for (int i = 0; i < col; i++) {
            res = res * (row - i);
            res = res / (i + 1);
        }
        System.out.println(res);
    }

    // This function returns the n-th row of pascal triangle
    static ArrayList<Integer> pascalRow(int n) {
        ArrayList<Integer> row = new ArrayList<>();
        int ans = 1;
        row.add(ans);
        System.out.print(ans + " ");
        for (int i = 1; i < n; i++) {
            ans = ans * (n - i);
            ans = ans / i;
            row.add(ans);
            System.out.print(ans + " ");
        }
        System.out.println();
        return row;
    }


    static void pascalTriangle(int N) {
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        for (int i = 1; i <= N; i++) {
            ans.add(pascalRow(i));
        }
    }
}
