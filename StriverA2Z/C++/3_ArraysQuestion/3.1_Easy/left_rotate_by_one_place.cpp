// O(n)

#include<bits/stdc++.h>

using namespace std;

void leftRotateByOne(int arr[], int n) {
    int first = arr[0];
    for (int i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n - 1] = first;

    // printing
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    leftRotateByOne(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}