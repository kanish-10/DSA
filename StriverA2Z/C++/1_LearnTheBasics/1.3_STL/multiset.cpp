// In multiset everything is stored in sorted order.

#include<bits/stdc++.h>

using namespace std;

int main() {
    multiset<int> ms;

    ms.insert(1); // {1}
    ms.insert(1); // {1,1}
    ms.insert(1); // {1,1,1}

    ms.erase(1); // all 1's are erase

    int cnt = ms.count(1);
    cout << cnt;

    // only to delete one of the duplicate value
    ms.erase(ms.find(1));

    // ms.erase(ms.find(1), ms.find(1)+2); // Error spotted

    return 0;
}