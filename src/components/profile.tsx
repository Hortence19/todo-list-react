import { Button } from "./button.tsx";
import { Input } from "./Input.tsx";
import { useContext, useState } from "react";
import { ProfileContext } from "../providers/profile-provider.tsx";


export const Profile = () => {

  const {name} = useContext(ProfileContext)

  const [showForm,setShowForm] = useState<boolean>(false)
const [lastname,firstname] = name.split(" ")
  return<div>
    <div className='space-x-2'>
    <strong>Nom :</strong>
    <span>{lastname}</span>
  </div>
    <div className='space-x-2'>
      <strong>Prenom :</strong>
      <span>{firstname}</span>
    </div>
    <Button onClick={() => setShowForm(!showForm)}>{showForm?"Fermer":"Modifier"}</Button>
    {showForm && <ProfileForm />}
  </div>
}

const ProfileForm = () => {
  const {name,setName} = useContext(ProfileContext)

  const handleFormAction = (formdata:FormData) => {
    const [name,prenom] = [
      formdata.get("lastname") as string,
      formdata.get("firstname") as string
    ]

    console.log(name,prenom)

    setName(`${name} ${prenom}`)
  }
  const [lastname,firstname] = name.split(" ")


  return  <form action={handleFormAction} className='space-y-4'>
    <h3 className='font-bold '>Modifier le profil</h3>
    <div className='flex gap-4'>
      <Input type="text" placeholder="Nom" name='lastname' defaultValue={lastname}/>
      <Input type='text' placeholder="prenom" name='firstname' defaultValue={firstname}/>
    </div>

    <Button>Submit</Button>
  </form>
}