// O(n)

#include<bits/stdc++.h>

using namespace std;

void moveZeroToEnd(int arr[], int n) {
    int j = -1;
    for (int i = 0; i < n; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
    }
    if (j == -1) {
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        return;
    }
    for (int i = j + 1; i < n; i++) {
        if (arr[i] != 0) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    // printing
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 4, 0, 0, 0, 0, 2, 0, 0, 0, 3, 4, 0, 5, 0};
    moveZeroToEnd(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}