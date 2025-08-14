import { Button } from "./button.tsx";
import type { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({children}:PropsWithChildren) => {
  const {pending} = useFormStatus()
  return <Button disabled={pending}  > {children} {pending && "..."}</Button>
}