import React from 'react';

export default function BorderOut(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M20,21H4a.99943.99943,0,0,1-1-1V4A.99943.99943,0,0,1,4,3H20a.99943.99943,0,0,1,1,1V20A.99943.99943,0,0,1,20,21ZM5,19H19V5H5Z" />
      <circle cx={12} cy={12} r={1} className="uim-tertiary" />
      <circle cx={12} cy={16} r={1} className="uim-tertiary" />
      <circle cx={12} cy={8} r={1} className="uim-tertiary" />
      <circle cx={8} cy={12} r={1} className="uim-tertiary" />
      <circle cx={16} cy={12} r={1} className="uim-tertiary" />
    </svg>
  );
}
