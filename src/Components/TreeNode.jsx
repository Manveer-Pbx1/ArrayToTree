import React from 'react';

function TreeNode({ value, left, right }) {
  if (value === 'null') {
    return null;
  }

  return (
    <div className="tree-node">
      <span className="node">{value}</span>
      {(left || right) && (
        <div className="children">
          {left && <TreeNode {...left} />}
          {right && <TreeNode {...right} />}
        </div>
      )}
    </div>
  );
}


export default TreeNode;
