#include<bits/stdc++.h>

using namespace std;

void maximumProductSubarray(int arr[], int n) {
    int pre = 1;
    int suff = 1;
    int product = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (pre == 0) pre = 1;
        if (suff == 0) suff = 1;
        pre *= arr[i];
        suff *= arr[n - i - 1];
        product = max(product, max(pre, suff));
    }
    cout << product;
}

int main() {
    int arr[] = {2, 3, -2, 4};
    maximumProductSubarray(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}