#include<bits/stdc++.h>

using namespace std;

void fourSum(vector<int> &arr, int target) {
    sort(arr.begin(), arr.end());
    vector<vector<int>> ans;
    for (int i = 0; i < arr.size(); i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue;
        for (int j = i + 1; j < arr.size(); j++) {
            if (j != i + 1 && arr[j] == arr[j - 1]) continue;
            int k = j + 1;
            unsigned long long l = arr.size() - 1;
            while (k < l) {
                long long sum = arr[i] + arr[j] + arr[k] + arr[l];
                if (sum == target) {
                    vector<int> temp = {arr[i], arr[j], arr[k], arr[l]};
                    ans.push_back(temp);
                    k++;
                    l--;
                    while (k < l && arr[k] == arr[k - 1]) k++;
                    while (k < l && arr[l] == arr[l + 1]) l--;
                } else if (sum < target) k++;
                else l--;
            }
        }
    }

    for (const vector<int>& i: ans) {
        for (int x: i) {
            cout << x << " ";
        }
        cout << endl;
    }
}

int main() {
    vector<int> arr = {1, 0, -1, 0, -2, 2};
    fourSum(arr, 0);
    return 0;
}