import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses | string;
  className?: string;
}

const sizeClasses = {
  button:
    'w-[109px] h-[32px] text-medium12 md:w-[72px] md:h-[30px] md:text-medium14 lg:w-[84px] lg:h-[32px] rounded-sm',

  auth: 'w-full h-[50px] text-medium18 rounded-lg',
  modal: 'w-full h-[54px] text-semi16 rounded-lg',
  modalAlert: 'w-full h-[42px] text-semi14 md:h-[48px] md:text-semi16 rounded-lg',
  delete: 'w-[52px] h-[32px] text-medium12 md:w-[84px] md:text-medium14 rounded-sm',
  input: 'w-[84px] h-[28px] text-medium12 md:w-[77px] md:h-[32px] lg:w-[83px] rounded-sm',
  addTodo: 'w-[284px] h-[32px] md:w-[544px] md:h-[40px] lg:w-[314px] rounded-md',
  addColumn: 'w-[284px] h-[66px] text-bold18 md:w-[544px] md:h-[70px] lg:w-[354px] rounded-lg',
  dashboardCard:
    'w-full h-[58px] text-semi14 md:w-[247px] md:h-[68px] md:text-semi16 lg:w-[332px] lg:h-[70px] rounded-lg',
  deleteDashboard:
    'w-full h-[52px] text-medium16 md:w-[320px] md:h-[62px] md:text-medium18 rounded-lg',
};

const variantClasses = {
  solid: 'bg-violet text-white disabled:bg-gray400',
  outline: 'bg-white border border-gray300 text-gray500',
  ghost: 'bg-white border border-gray300 text-violet',
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'solid',
  size = 'button',
  className,
}: ButtonProps) {
  const selectedSize = sizeClasses[size as keyof typeof sizeClasses] ?? size;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex cursor-pointer items-center justify-center overflow-hidden p-2 font-medium',
        selectedSize,
        variantClasses[variant],
        disabled && 'cursor-not-allowed',
        className
      )}
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</div>
    </button>
  );
}
