import React from 'react'

export default function SubmittedFormCard({form}) {
    //can access unique form from form object ID
  return (
    <div class="border border-amber-400/50 mb-6 h-48 flex justify-center items-center flex-col">
      <p className="text-neutral-300 mb-4">Room Description: {form.roomDescription}</p>
      <p className="text-neutral-300 mb-4">Soundtrack: {form.soundtrack}</p>
      <p className="text-neutral-300">Imagery: {form.imagery}</p>
    </div>
  );
}
