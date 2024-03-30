"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(root) {
    let cur = root;
    while (cur) {
        if (cur.left) {
            let prev = cur.left;
            while (prev.right)
                prev = prev.right;
            prev.right = cur.right;
            cur.right = cur.left;
            cur.left = null;
        }
        cur = cur.right;
    }
}
