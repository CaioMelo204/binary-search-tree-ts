"use strict";
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}
class BinarySearchTree {
    static insert(root, data) {
        const newNode = new TreeNode(data);
        if (root == null) {
            return newNode;
        }
        if (root.data === data) {
            root.count++;
            return root;
        }
        if (data <= root.data) {
            root.left = this.insert(root.left, data);
        }
        else {
            root.right = this.insert(root.right, data);
        }
        return root;
    }
    static inOrder(root) {
        if (root !== null) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
}
let root = new TreeNode(50);
root = BinarySearchTree.insert(root, 30);
root = BinarySearchTree.insert(root, 20);
root = BinarySearchTree.insert(root, 40);
root = BinarySearchTree.insert(root, 70);
root = BinarySearchTree.insert(root, 60);
root = BinarySearchTree.insert(root, 80);
BinarySearchTree.inOrder(root);
