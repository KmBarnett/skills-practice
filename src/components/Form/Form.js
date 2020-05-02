import React, { useState } from 'react';
import './Form.css'

 const Form = props => {
   const [title, changeTitle] = useState('')
   const [description, changeDescription] = useState('')

   const titleChangeHandler = e => {
     changeTitle(e.target.value)
   }

   const descriptionChangeHandler = e => {
     changeDescription(e.target.value)
   }

  const submitNewIdea = e => {
    e.preventDefault();
    const { addIdea } = props;
    const newIdea = { title, description, id: Date.now()};
    addIdea(newIdea);
    resetInputs();
  }

  const resetInputs = () => {
    changeTitle('')
    changeDescription('')
  }

    return (
      <form>
        <input
          type='text'
          placeholder='title'
          value={title}
          name='title'
          onChange={titleChangeHandler}
        />
        <input
          type='text'
          placeholder='description'
          value={description}
          name='description'
          onChange={descriptionChangeHandler}
        />
        <button
          onClick={submitNewIdea}
        >
          Submit!
        </button>
      </form>
    )
}

export default Form
