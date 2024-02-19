#include<bits/stdc++.h>

using namespace std;

void leader(int arr[], int n) {
    vector<int> ans;
    int maximum = INT_MIN;
    for (int i = n - 1; i >= 0; i--) {
        if (arr[i] > maximum) ans.push_back(arr[i]);
        maximum = max(maximum, arr[i]);
    }

    // Printing
    for (int i: ans) {
        cout << i << " ";
    }
}

int main() {
    int arr[] = {10, 22, 12, 3, 0, 6};
    leader(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}