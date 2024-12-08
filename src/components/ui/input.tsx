import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label";

type Props = {
  showLabel?: boolean;
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md bg-transparent border border-dark px-3 py- text-white ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </>

    )
  }
)
Input.displayName = "Input"

export { Input }

export const InputField: React.FC<Props> = ({
  showLabel = true,
  type, name,
  label,
  placeholder,
  ...props
}) => {
  return (

    <div className="flex flex-col space-y-1.5">
      {showLabel &&
        <Label htmlFor={label} className="text-white">{label}</Label>
      }
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        {...props} />
    </div>
  )
}