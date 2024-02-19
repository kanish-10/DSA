#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;

    int arr[n];
    unordered_map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        mpp[arr[i]]++;
    }

    int q;
    cin >> q;
    while (q--) {
        int i;
        cin >> i;
        cout << mpp[arr[i]] << endl;
    }
    return 0;
}