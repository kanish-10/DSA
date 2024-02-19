// map is like objects in JS (key-value pairs)
// key are unique
// arranged in sorted order
// O(log n)

#include<bits/stdc++.h>

using namespace std;

int main() {

    map<int, int> mpp;
    map<int, pair<int, int>> mpp1;
    map<pair<int, int>, int> mpp2;

    mpp[1] = 2;
    mpp.emplace(3, 1);
    mpp.insert({2, 4});

    mpp2[{2, 3}] = 10;

    for (auto it: mpp) {
        cout << it.first << " " << it.second << endl;
    }

    cout << mpp[1];
    cout << mpp[5];

    auto it = mpp.find(3);
    cout << it->second << endl;

    auto it1 = mpp.find(5);

    // upper_bound lower_bound erase swap size empty are same

    return 0;
}