import "./user-creation-form.styles.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const UserCreationForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, phone, password, confirmPassword } = formFields;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    setFormFields(defaultFormFields);
  };
  return (
    <div className="user-creation-form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          name="username"
          required
          onChange={onChangeHandler}
          value={username}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={onChangeHandler}
          value={email}
        />
        <FormInput
          label="Phone"
          type="tel"
          name="phone"
          required
          onChange={onChangeHandler}
          value={phone}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={onChangeHandler}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          onChange={onChangeHandler}
          value={confirmPassword}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default UserCreationForm;
