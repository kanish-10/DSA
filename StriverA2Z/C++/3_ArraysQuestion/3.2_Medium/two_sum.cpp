#include<bits/stdc++.h>

using namespace std;

void twoSumMap(int arr[], int target) {
    map<int, int> mpp;
    bool flag = true;
    for (int i = 0; i < (sizeof(arr) / sizeof(arr[0])); i++) {
        int rem = target - arr[i];
        if (mpp.find(rem) != mpp.end()) {
            flag = false;
            cout << "[" << mpp[rem] << "," << i << "]" << endl;
            break;
        }
        mpp[arr[i]] = i;
    }
    if (flag) cout << "[-1,-1]";
}

void twoSumSorted(int arr[], int target) {
    bool flag = true;
    int i = 0;
    int j = (sizeof(arr) / sizeof(arr[0])) - 1;
    while (i < j) {
        int sum = arr[i] + arr[j];
        if (sum == target) {
            flag = false;
            cout << "YES";
            break;
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    if (flag) cout << "NO";
}

int main() {
    int arr[] = {2, 7, 11, 14};
    int target = 9;

    twoSumMap(arr, target);
    twoSumSorted(arr, target);
}