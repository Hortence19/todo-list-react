import * as React from "react";
import { cn } from "../lib/utils.tsx";

export type InputProps = React.ComponentProps<'input'>

export const Input = ({className,...rest}:InputProps) => {
  return <input  {...rest} className={cn("border-[0.5px] rounded h-[35px] px-2 focus:outline-none focus:border-neutral-700 border-neutral-700/50",className)}/>
}