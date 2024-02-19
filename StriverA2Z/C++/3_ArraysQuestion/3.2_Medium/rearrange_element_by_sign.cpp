#include<bits/stdc++.h>

using namespace std;

void equal(vector<int> arr) {
    int ans[arr.size()];
    int pos = 0;
    int neg = 1;

    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] >= 0) {
            ans[pos] = arr[i];
            pos += 2;
        } else {
            ans[neg] = arr[i];
            neg += 2;
        }
    }

    for (int i: ans) {
        cout << i << " ";
    }
}

void unequal(vector<int> arr) {
    vector<int> pos;
    vector<int> neg;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] >= 0) {
            pos.push_back(arr[i]);
        } else {
            neg.push_back(arr[i]);
        }
    }

    if (pos.size() > neg.size()) {
        for (int i = 0; i < neg.size(); i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }
        int index = neg.size() * 2;
        for (int i = neg.size(); i < pos.size(); i++) {
            arr[index] = arr[i];
            index++;
        }
    } else {
        for (int i = 0; i < pos.size(); i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }
        int index = pos.size() * 2;
        for (int i = pos.size(); i < neg.size(); i++) {
            arr[index] = neg[i];
            index++;
        }
    }

    for (int i: arr) cout << i << " ";
}

int main() {
    equal({3, 1, -2, -5, 2, -4});
    cout << endl;

    vector<int> unequalVec = {-1, 2, -3, -4, -3, 1};
    unequal(unequalVec);
    return 0;
}