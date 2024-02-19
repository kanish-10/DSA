// Pattern

//      E
//      D E
//      C D E
//      B C D E
//      A B C D E

#include<iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the number of rows:";
    cin >> n;

    for (int i = 0; i < n; i++) {
        for (char ch = 'E' - i; ch <= 'E'; ch++) {
            cout << ch << " ";
        }
        cout << endl;
    }
    return 0;
}