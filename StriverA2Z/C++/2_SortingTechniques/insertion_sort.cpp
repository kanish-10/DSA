// O(n^2) - worst, avg
// O(n) - best

#include<bits/stdc++.h>

using namespace std;

void insertionSort(int arr[], int length) {
    for (int i = 0; i <= length - 1; i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            int temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

int main() {
    int n;
    cout << "Enter the size of array:";
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];

    insertionSort(arr, n);

    for (int x: arr) cout << x << " ";

    return 0;
}