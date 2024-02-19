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

void reverseArray(vector<int> &arr, int start, unsigned long long end) {
    while (start <= end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void reverse_90_degree(vector<vector<int>> &matrix) {

    printMatrix(matrix);

    for (int i = 0; i < matrix.size() - 1; i++) {
        for (int j = i + 1; j < matrix[0].size(); j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (vector<int> &i: matrix) {
        reverseArray(i, 0, i.size() - 1);
    }

    printMatrix(matrix);
}

int main() {
    vector<vector<int>> vec = {{1, 2, 3},
                               {4, 5, 6},
                               {7, 8, 9}};
    reverse_90_degree(vec);
    return 0;
}