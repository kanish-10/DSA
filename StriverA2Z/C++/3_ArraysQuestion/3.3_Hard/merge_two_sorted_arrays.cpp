#include<bits/stdc++.h>

using namespace std;

void swapIfGreater(long long arr1[], long long arr2[], int ind1, int ind2) {
    if (arr1[ind1] > arr2[ind2]) {
        swap(arr1[ind1], arr2[ind2]);
    }
}

void optimal1(long long arr1[], long long arr2[], int n, int m) {
    int left = n - 1;
    int right = 0;
    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            swap(arr1[left], arr2[right]);
            left--;
            right++;
        } else break;
    }
    sort(arr1, arr1 + n);
    sort(arr2, arr2 + m);

    for (int i = 0; i < n; i++) {
        cout << arr1[i] << " ";
    }
    cout << endl;
    for (int i = 0; i < m; i++) {
        cout << arr2[i] << " ";
    }
}

void optimal2(long long arr1[], long long arr2[], int n, int m) {
    int len = n + m;
    int gap = (len / 2) + (len % 2);
    while (gap > 0) {
        int left = 0;
        int right = left + gap;
        while (right < len) {
            if (left < n && right >= n) {
                swapIfGreater(arr1, arr2, left, right - n);
            } else if (left >= n) {
                swapIfGreater(arr2, arr2, left - n, right - n);
            } else {
                swapIfGreater(arr1, arr1, left, right);
            }
            left++;
            right++;
        }
        if (gap == 1) break;
        gap = (gap / 2) + (gap % 2);
    }

    cout << endl;
    for (int i = 0; i < n; i++) {
        cout << arr1[i] << " ";
    }
    cout << endl;
    for (int i = 0; i < m; i++) {
        cout << arr2[i] << " ";
    }
}

int main() {
    long long arr1[] = {1, 3, 5, 7};
    long long arr2[] = {0, 2, 6, 8, 9};

    optimal1(arr1, arr2, sizeof(arr1) / sizeof(arr1[0]), sizeof(arr2) / sizeof(arr2[0]));
    optimal2(arr1, arr2, sizeof(arr1) / sizeof(arr1[0]), sizeof(arr2) / sizeof(arr2[0]));
    return 0;
}