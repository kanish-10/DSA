#include<bits/stdc++.h>

using namespace std;

int subarraySum(vector<int> nums, int k) {
    map<int, int> mpp;
    mpp[0] = 1;
    int presum = 0, cnt = 0;

    for (int num: nums) {
        presum += num;
        int remove = presum - k;
        cnt += mpp[remove];
        mpp[presum] += 1;
    }
    return cnt;
}

int main() {
    int cnt = subarraySum({1, 2, 3, -3, 1, 1, 1, 4, 2, -3}, 3);
    cout << cnt;
    return 0;
}