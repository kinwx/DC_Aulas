import { cn } from "../../../utils/cn";

export const Button = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded transition duration-300 text-lg font-semibold",
        className
      )}
      {...props}
    />
  );
};
