import  { type PropsWithChildren } from "react";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "h-10 flex items-center px-4   rounded text-white",
  {
    variants:{
      variant: {
        primary: "bg-blue-500",
        danger: "bg-red-500",
        outline:"bg-transparent border-1 border-neutral-600"
      },

    },
  defaultVariants:{variant:"primary"}}
)

type ButtonProps = PropsWithChildren<React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>>


export const Button = ({className,children,variant,...rest}:ButtonProps) => {
  return <button className={cn(buttonVariants({variant,className}))} {...rest}>{children}</button>
}