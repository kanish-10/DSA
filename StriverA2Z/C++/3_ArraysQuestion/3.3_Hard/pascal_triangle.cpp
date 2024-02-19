#include<bits/stdc++.h>

using namespace std;

// This function returns a particular element of pascal triangle.
void NcR(int row, int col) {
    row--;
    col--;
    long long res = 1;
    for (int i = 0; i < col; i++) {
        res = res * (row - i);
        res = res / (i + 1);
    }
    cout << res << endl;
}

// This function returns the n-th row of pascal triangle
vector<int> pascalRow(int n) {
    vector<int> row;
    int ans = 1;
    row.push_back(ans);
    cout << ans << " ";
    for (int i = 1; i < n; i++) {
        ans = ans * (n - i);
        ans = ans / i;
        row.push_back(ans);
        cout << ans << " ";
    }
    cout << endl;
    return row;
}

void pascalTriangle(int N) {
    vector<vector<int>> ans;
    for (int i = 1; i <= N; i++) {
        ans.push_back(pascalRow(i));
    }
}

int main() {
    NcR(5, 3);
    pascalRow(5);
    pascalTriangle(5);
    return 0;
}