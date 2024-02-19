#include<bits/stdc++.h>

using namespace std;

void reverseArr(int arr[], int len, int i = 0) {
    if (i >= len) return;
    swap(arr[i], arr[len - 1]);
    reverseArr(arr, --len, ++i);
}

int main() {
    int n;
    cout << "Enter the number of elements fro array: ";
    cin >> n;
    int arr[n];
    for(int i = 0; i < n; i++) cin >> arr[i];
    reverseArr(arr, n);

    for (int i: arr) {
        cout << i << " ";
    }
    return 0;
}