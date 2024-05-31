function Input({ onChange, value, title, name, charges }) {
    return (
      <label style={{ display: 'block', marginBottom: '10px' }}>


<div className="input-main" style={{display:'flex'}}>
<input onChange={onChange} type='radio' value={value} name={name} /> 
<div style={{fontFamily:'Noteworthy', fontSize:'19px'}}>
{title}
{charges}

</div>

</div>

      </label>
    );
  }
  
  export default Input;
  