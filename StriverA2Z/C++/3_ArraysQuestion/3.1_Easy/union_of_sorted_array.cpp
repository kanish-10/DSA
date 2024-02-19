// O(n1 + n2) both

#include<bits/stdc++.h>

using namespace std;

void unionArray(int arr1[], int n1, int arr2[], int n2) {
    int i = 0;
    int j = 0;
    vector<int> unionArr;
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            if (unionArr.empty() || unionArr.back() != arr1[i]) {
                unionArr.push_back(arr1[i]);
            }
            i++;
        } else {
            if (unionArr.empty() || unionArr.back() != arr2[j]) {
                unionArr.push_back(arr2[j]);
            }
            j++;
        }
    }

    while (i < n1) {
        if (unionArr.back() != arr1[i]) {
            unionArr.push_back(arr1[i]);
        }
        i++;
    }

    while (j < n2) {
        if (unionArr.back() != arr2[j]) {
            unionArr.push_back(arr2[j]);
        }
        j++;
    }

    // printing
    for (auto it: unionArr) {
        cout << it << " ";
    }
}

int main() {
    int arr1[] = {1, 1, 2, 3, 4, 5};
    int arr2[] = {2, 3, 4, 4, 5, 6};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    int n2 = sizeof(arr2) / sizeof(arr2[0]);

    unionArray(arr1, n1, arr2, n2);

    return 0;
}