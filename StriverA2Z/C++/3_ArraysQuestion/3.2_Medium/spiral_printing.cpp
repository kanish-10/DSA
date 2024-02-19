#include<bits/stdc++.h>

using namespace std;

vector<int> spiralOrder(vector<vector<int>> matrix) {
    int n = matrix.size();
    int m = matrix[0].size();

    int left = 0;
    int top = 0;
    int right = m - 1;
    int bottom = n - 1;

    vector<int> ans;

    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) {
            ans.push_back(matrix[top][i]);
        }
        top++;
        for (int i = top; i <= bottom; i++) {
            ans.push_back(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                ans.push_back(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                ans.push_back(matrix[i][left]);
            }
            left++;
        }
    }
    return ans;
}

int main() {
    vector<int> vec = spiralOrder({{1, 2, 3},
                                          {8, 9, 4},
                                          {7, 6, 5}});

    for (int x: vec) {
        cout << x << " ";
    }

    return 0;
}