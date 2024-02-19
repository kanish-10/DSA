// O(n^2) - worst, avg
// O(n) - best

#include<bits/stdc++.h>

using namespace std;

void bubbleSort(int arr[], int length) {
    for (int i = length - 1; i >= 1; i--) {
        int swap = 0;
        for (int j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swap = 1;
            }
        }
        if (swap == 0) break;
    }
}

int main() {
    int n;
    cout << "Enter the size of array:";
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)cin >> arr[i];

    bubbleSort(arr, n);

    for (int x: arr) cout << x << " ";
    return 0;
}