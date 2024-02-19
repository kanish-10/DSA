#include<bits/stdc++.h>

using namespace std;

void largestSubarrayZeroSum(int arr[], int n) {
    map<int, int> mpp;
    int maxi = 0;
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == 0) {
            maxi = i + 1;
        } else {
            if (mpp.find(sum) != mpp.end()) {
                maxi = max(maxi, i - mpp[sum]);
            } else {
                mpp[sum] = i;
            }
        }
    }

    cout << maxi;
}

int main() {
    int arr[] = {1, -1, 0, 0, 2};
    largestSubarrayZeroSum(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}