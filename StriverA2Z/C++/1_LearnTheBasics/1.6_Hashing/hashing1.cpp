#include<iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the size of array:";
    cin >> n;

    int arr[n];
    for(int i = 0; i < n; i++) cin >> arr[i];

    int q;
    cout << "Enter the number of queries:";
    cin >> q;

    // Pre-compute
    int hash[13]={0};
    for (int i = 0; i < n; i++) {
        hash[arr[i]] += 1;
    }

    while(q--){
        int number;
        cin >> number;
        // fetch
        cout << hash[number] << endl;
    }

    return 0;
}