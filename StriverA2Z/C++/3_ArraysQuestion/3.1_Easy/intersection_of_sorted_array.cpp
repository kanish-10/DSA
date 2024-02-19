// O(n1 + n2) - TC
// O(1) - SC

#include<bits/stdc++.h>

using namespace std;

void intersectionArray(int arr1[], int n1, int arr2[], int n2) {
    int i = 0;
    int j = 0;
    vector<int> intersection;

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            intersection.push_back(arr1[i]);
            i++;
            j++;
        }
    }

    for (auto it: intersection) {
        cout << it << " ";
    }
}

int main() {
    int arr1[] = {1, 2, 3, 3, 4, 5, 8};
    int arr2[] = {2, 3, 3, 5, 6, 7, 8};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    int n2 = sizeof(arr2) / sizeof(arr2[0]);

    intersectionArray(arr1, n1, arr2, n2);
    return 0;
}