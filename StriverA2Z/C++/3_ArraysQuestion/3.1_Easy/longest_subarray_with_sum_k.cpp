#include<bits/stdc++.h>

using namespace std;

void subArrayForAll(int arr[], int n, int target) {
    int length = 0;
    int sum = 0;
    map<int, int> presumMap;

    for (int i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == target) {
            length = max(length, i + 1);
        }
        int remaining = sum - target;
        if (presumMap.find(remaining) != presumMap.end()) {
            int len = i - presumMap[remaining];
            length = max(len, length);
        }
        if (presumMap.find(sum) == presumMap.end()) {
            presumMap[sum] = i;
        }
    }

    cout << "The longest subarray is " << length << endl;
}

void subArrayForPositiveAndZero(int arr[], int n, int target) {
    int left = 0, right = 0, sum = arr[0], length = 0;
    while (right < n) {
        while (left <= right && sum > target) {
            sum -= arr[left];
            left++;
        }
        if (sum == target) length = max(length, right - left + 1);
        right++;
        if (right < n) sum += arr[right];
    }

    cout << "The longest subarray is: " << length;
}

int main() {
    int arr[] = {1, 2, 3, 1, 1, 1, 1, 1, 1, 4, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    subArrayForAll(arr, n, 6);
    subArrayForPositiveAndZero(arr, n, 6);
    return 0;
}