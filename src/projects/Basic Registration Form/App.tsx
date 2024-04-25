import React, { useState } from "react";
import './style.css'
import { fieldsArray } from "./data";

type valuesType = {
  [index: string]: string;
}
type attentionsType = {
  [index: string]: boolean;
}

function Form() {
  const [values, setValues] = useState<valuesType>({});
  const [attentions, setAttentions] = useState<attentionsType>({});

  const fields = fieldsArray.map((field) => 
  <p key={field.id}>
    <label>
      {field.name + ":"} <input 
      className={(attentions[field.name] === true ? "attention" : "") + " input"}
      onChange={(event) => setValues({...values, [field.name]:event.target.value})}
      value={values[field.name]} 
      placeholder={`${field.placeholder}`}></input>
    </label>
  </p>)

  let submit = function (event : React.FormEvent<HTMLFormElement>) {
    let fl = true;
    let submitAttention: attentionsType = {};
    for (let field of fieldsArray) {
      console.log(values, field.name, values[field.name]);
      if (values[field.name] === undefined) {
        fl = false;
        submitAttention[field.name] = true;
      }
    }

    if (!fl) {
      alert('Заполните выделенные поля');
      setAttentions(submitAttention);
      event.preventDefault();
    }
    else {
      let str = '';
      for (let field of fieldsArray) {
        str += `${field.name}: ${values[field.name]}\n`
      }
      alert(str);
    }
  }

  return (
    <form onSubmit={submit} className="form">
    {fields}
    <p><button>Submit</button></p>
  </form>
  );
}

function RegistrationForm() {
  return (
  <div className="div">
    <Form></Form>
  </div>
  );
}

export default RegistrationForm;