import { twMerge } from "tailwind-merge";

export const Button: React.FC<
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...props }) => {
  return (
    <button className={twMerge("border px-2", className)} {...props}>
      {children}
    </button>
  );
};
