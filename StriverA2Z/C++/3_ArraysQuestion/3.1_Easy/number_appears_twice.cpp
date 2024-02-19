#include<bits/stdc++.h>

using namespace std;

void numberAppearOnce(int arr[], int n) {
    int x = 0;
    for (int i = 0; i < n; i++) {
        x ^= arr[i];
    }
    cout << "The number which appeared once is " << x;
}

int main() {
    int arr[] = {1, 2, 3, 1, 3, 4, 4, 5, 6, 5, 6};
    numberAppearOnce(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}