import * as React from 'react';

export interface ButtonProps {
  url?: string;
  mode?: 'success' | 'info' | 'warning' | 'danger' | 'alert' | 'special';
  size?: 'small' | 'medium' | 'large';
  type?: 'solid' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
}

const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
      clipRule="evenodd"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  type = 'solid',
  url,
  mode = 'info',
  icon = false,
}: ButtonProps) => {
  const sizes = {
    small: 'px-4 py-1.5 text-sm',
    medium: 'px-9 py-2.5 text-lg',
    large: 'px-10 py-4 text-xl',
  };
  const modes = {
    success: 'bg-base-green border-base-green',
    info: 'bg-base-blue border-base-blue',
    warning: 'bg-base-orange border-base-orange',
    danger: 'bg-base-red border-base-red',
    alert: 'bg-base-yellow border-base-yellow',
    special: 'bg-base-orchid border-base-orchid',
  };
  const types = {
    outline: 'bg-outline',
    solid: 'bg-solid text-white',
  };
  const textColors = `bg-solid ${types[type]} font-bold`;

  return (
    <a
      href={url}
      className={`ks-button w-full flex items-center justify-center text-base font-medium rounded-md border-2 ${textColors} ${modes[mode]} ${sizes[size]} ${mode}`}
    >
      {children}{' '}
      {icon && (
        <span className="pl-1">
          <FireIcon />
        </span>
      )}
    </a>
  );
};
