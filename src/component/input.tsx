import React from 'react';

interface Label {
  for: string;
  label: string;
  type?: string;
  pattern?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  additionalStyles?: string;
  isRequired?: boolean;
}

const Input = (props: Label) => {
  const isRequired = props.isRequired ? props.isRequired : false;
  const inputType = props.type ? props.type : 'text';
  const inputStyles = `w-full h-5 p-3 font-Poppins font-base rounded-xl border-solid border-2 border-dark ${props.additionalStyles}`;

  return (
    <div className='flex p-5 items-center justify-between gap-5'>
      <label className='text-left' htmlFor={props.for}>
        {props.label}
      </label>
      <input
        type={inputType}
        id={props.for}
        name={props.for}
        pattern={props.pattern}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={inputStyles}
        required={isRequired}
      />
    </div>
  );
}

export default Input;
