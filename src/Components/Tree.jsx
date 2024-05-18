import React from 'react';
import TreeNode from './TreeNode';

function buildTree(array, index = 0) {
  if (index >= array.length || array[index] === 'null') {
    return null;
  }

  const node = {
    value: array[index],
    left: buildTree(array, 2 * index + 1),
    right: buildTree(array, 2 * index + 2),
  };

  return node;
}

function Tree({ array }) {
  const root = buildTree(array);

  return (
    <div className="tree">
      {root && <TreeNode {...root} />}
    </div>
  );
}


export default Tree;
