var removeElement = function(nums, val){
  let l =0;
  for(j = 0; j < nums.length; j++){
      if(nums[j] != val ){
          nums[l]=nums[j];
          l++;
      }
  }
  return l
}


var twoSum = function(nums, target) {
  var sumTwo ={};
  for( var i =0; i < nums.length; i++){
      var numTarget = target - nums[i];
      if(numTarget in sumTwo){
          return [sumTwo[numTarget], i];
      }
      sumTwo[nums[i]] = i;
  }
};

/**
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root==null){
      return 0;
  }
   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
