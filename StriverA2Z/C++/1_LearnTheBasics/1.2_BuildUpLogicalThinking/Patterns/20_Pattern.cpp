// Pattern

//      *                 *
//      * *             * *
//      * * *         * * *
//      * * * *     * * * *
//      * * * * * * * * * *
//      * * * *     * * * *
//      * * *         * * *
//      * *             * *
//      *                 *

#include<iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the number of rows:";
    cin >> n;

    int initialSpace = 2 * n - 2;
    for (int i = 1; i <= 2 * n - 1; i++) {
        int stars = i;
        if (i > n) stars = 2 * n - i;

        for (int j = 1; j <= stars; j++) {
            cout << "* ";
        }

        for (int j = 1; j <= initialSpace; j++) {
            cout << "  ";
        }

        for (int j = 1; j <= stars; j++) {
            cout << "* ";
        }

        cout << endl;
        if (i < n) initialSpace -= 2;
        else initialSpace += 2;
    }
    return 0;
}