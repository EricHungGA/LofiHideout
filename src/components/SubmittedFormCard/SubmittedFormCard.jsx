import React from 'react'
import { deleteForm } from '../../utilities/users-api'
import { Link } from 'react-router-dom'



export default function SubmittedFormCard({form, itemWasDeleted, setItemWasDeleted}) {
    //unique form from form object ID
    const formId = form._id;

    function handleDelete(formId) {
        const id = {formId};
        deleteForm(id);
        setItemWasDeleted(false);
    }

  return (
    <>
    <div class="rounded-xl shadow-lg shadow-amber-500 border border-amber-400/50 mb-6 h-72 flex justify-center items-center flex-col">
      <p className="text-neutral-300 mb-4">Room Description: {form.roomDescription}</p>
      <p className="text-neutral-300 mb-4">Soundtrack: {form.soundtrack}</p>
      <p className="text-neutral-300 mb-4">Imagery: {form.imagery}</p>
      <Link to={`/myforms/${formId}`}>
      <button class="rounded-2xl relative border border-indigo-700/90 text-indigo-700/90 p-2 mb-4">Edit Request</button>
      </Link>
      <button class="rounded-2xl relative border border-red-400/50 text-red-400/50 p-2" onClick={()=>handleDelete(formId)}>Delete Request</button>
    </div>
    </>
  );
}
