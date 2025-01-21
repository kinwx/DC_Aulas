import { cn } from "../../../utils/cn";

export const Input = ({ className, ...props }) => {
  return (
    <input className={cn("rounded px-3 py-4 w-full", className)} {...props} />
  );
};
