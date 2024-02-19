#include<bits/stdc++.h>

using namespace std;

void linearSearch(int arr[], int n, int target) {
    bool flag = true;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            flag = false;
            cout << target << " is founded at " << i;
            break;
        }
    }
    if (flag) {
        cout << "-1 not found";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    linearSearch(arr, sizeof(arr) / sizeof(arr[0]), 32);
    return 0;
}