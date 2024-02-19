#include<bits/stdc++.h>

using namespace std;

int main() {

    pair<int, char> p = {1, 'a'};

    cout << p.first << " " << p.second << endl;

    pair<int, pair<int, int>> pr = {1, {3, 4}};

    cout << pr.first << " " << pr.second.first << " " << pr.second.second << endl;

    pair<int, int> arr[] = {{1, 2},
                            {2, 5},
                            {5, 1}};


    cout << arr[0].first << " " << arr[2].second << endl;

    return 0;
}