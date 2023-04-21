import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value, error: '' });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { confirm, error, ...data } = formData;
      const user = await signUp(data);
      setUser(user);
      navigate('/');
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div class="rounded-xl border border-neutral-500/50 w-128 h-28 text-md text-neutral-500">
      <div className="form-container mt-10">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label class="mr-4 ml-4" >Name</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label class="mr-4 ml-4">Email</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label class="mr-4 ml-4">Password</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label class="mr-4 ml-4">Confirm</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button  class="rounded-xl border border-neutral-500/50 mr-4 ml-4 w-24 h-8 animate-fade-in-and-out shadow-lg shadow-blue-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500/40 duration-300" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}