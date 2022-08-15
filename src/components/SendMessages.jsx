import { useState } from "react";
import { TextField, styled } from "@mui/material"


const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  "& label.Mui-focused": {
    color: "#bdd5bf",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#bdd5bf",
      fontSize: "1.3em",
    },
    borderRadius: '10px'
  },
}));

const textFieldInputLabelStyle = {
  fontSize: "1.3em",
  alignSelf: "center",
  justifySelf: "center",
};

const textFieldStyle = {
  width: "230px",
  height: "30px"
};

const SendMessages = () => {

  const CHARACTER_LIMIT = 100

  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    namePerson: "",
    message: "",
  });

  const { namePerson, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (namePerson.length < 1) {
      setNameEmptyError(true);
      setTimeout(() => setNameEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {

      let url = `https://web.whatsapp.com/send?phone=${+526561630250}`;

      url += `&text=Nombre: ${encodeURI(namePerson)}%0A${encodeURI(message)}&app_absent=0`;

      window.open(url);

      // TODO: Enter code here
    }
  };




  return(
      <div className="whatsapp-card-app">
        <div className="title-flex-middle">
          <div>!Acompañanos!</div>
        </div>
        <div className="search-contact-app">
          <CssTextField
            error={nameEmptyError}
            label='Nombre'
            placeholder='Nombre'
            name='namePerson'
            value={namePerson}
            onChange={onChange}
            size='small'
            style={{
              margin: "1em 0em",
            }}
            inputProps={{
              style: textFieldStyle,
            }}
            InputLabelProps={{
              style: textFieldInputLabelStyle,
            }}
            required
          />
        </div>
        <div className='message app' style={{ marginTop: "1.5em" }}>
          <CssTextField
            multiline
            maxRows={4}
            label='Mensaje'
            placeholder='Envianos tus buenos deseos!....'
            size='small'
            InputLabelProps={{
              style: textFieldInputLabelStyle,
            }}
            inputProps={{
              style: {
                width: "230px",
                height: "90px",
              },
              maxLength: CHARACTER_LIMIT,
            }}
            FormHelperTextProps={{
              style: {
                margin: 0,
                padding: "0 0 0 5px",
                fontSize: 15,
              },
            }}
            name='message'
            value={message}
            onChange={onChange}
            required
            error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
            helperText={
              !(message.length > CHARACTER_LIMIT - 1)
                ? `${message.length}/${CHARACTER_LIMIT}`
                : "Max length exceeded"
            }
          />
        </div>
        <div style={{ marginTop: "1.5em", alignSelf: "center"}}>
            <button onClick={onSubmit} className="send-btn">Enviar</button>
        </div>
      </div>
  )
}

export default SendMessages