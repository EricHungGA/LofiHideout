import React from 'react'
import { useState } from 'react'
import { sendForm } from '../../utilities/users-api';
import { useNavigate } from 'react-router-dom';


export default function SendFormPage() {
    const [formData, setFormData] = useState({
        roomDescription: '',
        soundtrack: '',
        imagery: '',
      });

      const navigate = useNavigate();

    const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            // const { ...data } = formData;
            const data = formData;
          //controller function here passing the data into it 
            sendForm(data)
          navigate('/');
        } catch {
          setFormData({ ...formData, error: 'Form Submission Failed - Try Again' });
        }
      };

  return (
    <div class="form-container mt-2 flex flex-col">
    <style>{`body { background-image: url('https://res.cloudinary.com/di8ugfihk/image/upload/v1681921382/ezgif.com-crop_ocvy7g.gif'); }`}</style>
    <p class="text-xl font-bold text-white/70 sm:text-2xl tracking-wider mb-4">Submit A Request</p>
    <div class="rounded-xl border border-neutral-500/50 self-center w-96 h-128 text-md text-neutral-500">
    <div className="form-container mt-4">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div class="flex flex-col mb-4">
        <label class="mr-4 ml-4 self-center" >Room Description</label>
        <textarea class="text-neutral-300 rounded-md bg-neutral-500/50 self-center w-60 h-24" type="text" name="roomDescription" value={formData.roomDescription} onChange={handleChange} required />
        </div>
        <div class="flex flex-col mb-4">
        <label class="mr-4 ml-4 self-center">Soundtrack</label>
        <textarea class="text-neutral-300 rounded-md bg-neutral-500/50 self-center w-60 h-24" type="text" name="soundtrack" value={formData.soundtrack} onChange={handleChange} required />
        </div>
        <div class="flex flex-col mb-4">
        <label class="mr-4 ml-4 self-center">Imagery</label>
        <textarea class="text-neutral-300 rounded-md bg-neutral-500/50 self-center w-60 h-24" type="text" name="imagery" value={formData.imagery} onChange={handleChange} required />
        </div>
        <button  class="rounded-xl border border-neutral-500/50 mr-4 ml-4 w-24 h-8 animate-fade-in-and-out shadow-lg shadow-blue-500/50 self-center" type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
  </div>
  )
}
