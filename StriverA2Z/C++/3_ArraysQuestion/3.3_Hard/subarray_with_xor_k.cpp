#include<bits/stdc++.h>

using namespace std;

void subarrayXorK(int arr[], int n, int target) {
    map<int, int> mpp;
    int xr = 0;
    mpp[xr]++;
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        xr ^= arr[i];
        int x = xr ^ target;
        cnt += mpp[x];
        mpp[xr]++;
    }
    cout << cnt;
}

int main() {
    int arr[] = {4, 2, 2, 6, 4};
    subarrayXorK(arr, sizeof(arr)/ sizeof(arr[0]), 6);
    return 0;
}