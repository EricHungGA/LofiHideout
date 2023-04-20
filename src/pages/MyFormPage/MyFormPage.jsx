import React from 'react'
import SubmittedFormCard from '../../components/SubmittedFormCard/SubmittedFormCard'

export default function MyFormPage({user, itemWasDeleted, setItemWasDeleted}) {
  return (
    <div>
    <p class="text-xl font-bold text-white/70 sm:text-2xl tracking-wider mb-4">Submitted Forms</p>
      <style>{`body { background-image: url('https://res.cloudinary.com/di8ugfihk/image/upload/v1681921382/ezgif.com-crop_ocvy7g.gif'); }`}</style>
      {user.requestForms.map((form, idx) => {
        return <SubmittedFormCard key={idx} form={form} itemWasDeleted={itemWasDeleted} setItemWasDeleted={setItemWasDeleted}/>
      })}
    </div>
  )
}