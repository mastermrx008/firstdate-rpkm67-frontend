import React from 'react';

interface ButtonProps {
  content: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex items-center justify-center w-48 h-10 inv-rad inv-rad-2 border-8 border-rpkm-cream'
      }
    >
      <div
        className={
          'flex items-center justify-center bg-rpkm-red text-rpkm-cream text-lg w-44 h-8 inv-rad inv-rad-1'
        }
      >
        {content}
      </div>
    </button>
  );
};

export default Button;
