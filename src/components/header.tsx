import { useContext } from "react";
import { ProfileContext } from "../providers/profile-provider.tsx";

export const Header = () => {
const { name } = useContext(ProfileContext)
  return <div className='flex justify-between px-5 py-3 border-b border-neutral-700/40 mb-8'>
    <div>Logo</div>
    <div className='flex gap-2 items-center'>
      <div className="size-8 rounded-full bg-gray-500"></div>
      <div>{name}</div>
    </div>
  </div>;
}