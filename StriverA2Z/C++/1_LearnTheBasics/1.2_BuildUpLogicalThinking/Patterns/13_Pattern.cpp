// Pattern

//      1
//      2 3
//      4 5 6
//      7 8 9 10
//      11 12 13 14 15

#include<iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the number of rows:";
    cin >> n;

    int num = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
    return 0;
}