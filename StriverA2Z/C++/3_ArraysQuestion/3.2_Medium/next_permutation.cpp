#include<bits/stdc++.h>

using namespace std;

void reverse(vector<int> &arr, int start, int end) {
    while (start <= end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void permutation(vector<int> &arr) {
    int ind = -1;
    for (int i = arr.size() - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            ind = i;
            break;
        }
    }
    if (ind == -1) {
        reverse(arr, 0, arr.size() - 1);
    }

    for (int i = arr.size() - 1; i >= ind; i--) {
        if (arr[i] > arr[ind]) {
            swap(arr[i], arr[ind]);
            break;
        }
    }
    reverse(arr, ind + 1, arr.size() - 1);
}


int main() {
    vector<int> vec = {1,2,3};
    permutation(vec);
    for (int i: vec) cout << i << " ";
    return 0;
}