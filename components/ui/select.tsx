import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface Option {
  id?: number;
  code?: string;
  name: string;
  value: string;
}

interface SelectPropTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  value?: string | number;
  required?: boolean;
  name: string;
  options: (string | Option)[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectPropTypes>(({
  name,
  onChange = () => { },
  value,
  required = false,
  label,
  options = [],
  ...props
}, ref) => {
  return (
    <div>
      {label && (
        <label className="text-sm lg:text-base font-medium">
          {label}
        </label>
      )}
      <select
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        ref={ref}
        {...props}
      >
        <option value="">Select</option>
        {options.map((option, index) => {
          const optionValue = typeof option === 'string' ? option : option.code;
          const optionLabel = typeof option === 'string' ? option : option.name;
          return (
            <option value={optionValue} key={index}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div >
  );
});

Select.displayName = "Select";