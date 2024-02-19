// O(n)

#include<bits/stdc++.h>

using namespace std;

void rightRotateByOne(int arr[], int n) {
    int last = arr[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = last;

    // printing
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    rightRotateByOne(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}