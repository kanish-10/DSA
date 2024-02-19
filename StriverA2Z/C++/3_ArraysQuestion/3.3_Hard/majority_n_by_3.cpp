#include<bits/stdc++.h>

using namespace std;

void majority_n_by_3(const int arr[], int n) {
    int cnt1 = 0, cnt2 = 0, el1 = INT_MIN, el2 = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (cnt1 == 0 && el2 != arr[i]) {
            cnt1 = 1;
            el1 = arr[i];
        } else if (cnt2 == 0 && el1 != arr[i]) {
            cnt2 = 1;
            el2 = arr[i];
        } else if (arr[i] == el1) {
            cnt1++;
        } else if (arr[i] == el2) {
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = 0;
    cnt2 = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == el1) cnt1++;
        if (arr[i] == el2) cnt2++;
    }

    int min = (int) (n / 3) + 1;
    vector<int> ls;
    if (cnt1 >= min) ls.push_back(el1);
    if (cnt2 >= min) ls.push_back(el2);

    for (int i: ls) {
        cout << i << " ";
    }
}

int main() {
    int arr[] = {2, 2, 1, 3, 1, 1, 3, 1, 1};
    majority_n_by_3(arr, 9);
    return 0;
}