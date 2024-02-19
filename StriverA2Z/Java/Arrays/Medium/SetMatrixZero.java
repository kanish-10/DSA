public class SetMatrixZero {
    public static void main(String[] args) {
        int[][] arr = {{1, 2, 3, 1}, {4, 0, 2, 6}, {3, 4, 0, 2}, {0, 3, 1, 5}};
        setMatrixZero(arr);
    }

    static void printMatrix(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }

    static void setMatrixZero(int[][] arr) {
        printMatrix(arr);
        int col0 = 1;
        int n = arr.length;
        int m = arr[0].length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (arr[i][j] == 0) {
                    arr[i][0] = 0;
                    if (j != 0) arr[0][j] = 0;
                    else col0 = 0;
                }
            }
        }

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (arr[i][j] != 0) {
                    if (arr[i][0] == 0 || arr[0][j] == 0) {
                        arr[i][j] = 0;
                    }
                }
            }
        }

        if (arr[0][0] == 0) {
            for (int j = 0; j < m; j++) {
                arr[0][j] = 0;
            }
        }

        if (col0 == 0) {
            for (int i = 0; i < m; i++) {
                arr[i][0] = 0;
            }
        }

        printMatrix(arr);
    }
}
