#include<bits/stdc++.h>

using namespace std;

void mergeOverlappingSubintervals(vector<vector<int>> &arr) {
    vector<vector<int>> ans;
    sort(arr.begin(), arr.end());
    for(int i = 0; i < arr.size(); i++) {
        if(ans.empty() || arr[i][0] > ans.back()[1]) {
            ans.push_back(arr[i]);
        } else {
            ans.back()[1] = max(ans.back()[1], arr[i][1]);
        }
    }

    for(vector<int> i : ans) {
        cout << "{" << i[0] << ", " << i[1] << "}" << endl;
    }
}

int main() {
    vector<vector<int>> arr = {{1,  3},
                               {2,  6},
                               {8,  9},
                               {9,  11},
                               {8,  10},
                               {2,  4},
                               {15, 18},
                               {16, 17}};
    mergeOverlappingSubintervals(arr);
    return 0;
}