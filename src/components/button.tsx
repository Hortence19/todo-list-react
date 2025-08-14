import  { type PropsWithChildren } from "react";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.tsx";



const buttonVariants = cva(
  "h-[35px] flex items-center px-4   rounded text-neutral-300 font-bold disabled:opacity-50",
  {
    variants:{
      variant: {
        primary: "bg-blue-700",
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