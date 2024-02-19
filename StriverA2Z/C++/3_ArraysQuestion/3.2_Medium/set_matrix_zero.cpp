#include<bits/stdc++.h>

using namespace std;


void printMatrix(vector<vector<int>> vec) {
    for (int i = 0; i < vec.size(); i++) {
        for (int j = 0; j < vec[0].size(); j++) {
            cout << vec[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
}


void set_zero(vector<vector<int>> &matrix) {
    printMatrix(matrix);

    int col0 = 1;
    int m = matrix.size();
    int n = matrix[0].size();

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                if (j != 0) matrix[0][j] = 0;
                else col0 = 0;
            }
        }
    }
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] != 0) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    if (matrix[0][0] == 0) {
        for (int j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0 == 0) {
        for (int i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    printMatrix(matrix);
}

int main() {
    vector<vector<int>> vec = {{1, 2, 3, 1},
                               {4, 0, 2, 6},
                               {3, 4, 0, 2},
                               {0, 3, 1, 5}};
    set_zero(vec);
    return 0;
}