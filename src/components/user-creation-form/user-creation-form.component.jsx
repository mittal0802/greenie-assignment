import "./user-creation-form.styles.scss";
import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Toast from "../toast/toast.component";
import { UserDataContext } from "../../contexts/users.context";

const options = { day: "numeric", month: "long", year: "numeric" };
const currentDate = new Date().toLocaleDateString("en-IN", options);
const defaultFormFields = {
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  createdAt: currentDate,
};

const statusMessages = {
  1: {
    color: "red",
    message: "Email already in use. Please enter a different email",
  },
  2: { color: "red", message: "Both Passwords do not match" },
  3: { color: "red", message: "Password should be at least 6 characters long" },
  4: { color: "green", message: "User added successfully" },
  5: {
    color: "red",
    message: "Username already in use. Please enter different username",
  },
};
const UserCreationForm = () => {
  const { addUser, usersData } = useContext(UserDataContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const { username, email, phone, password, confirmPassword } = formFields;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const closeToast = () => {
    setTimeout(() => {
      setShowAlert(false);
      setError(null);
    }, 5000);
  };

  const validateData = () => {
    if (password !== confirmPassword) {
      setError(statusMessages[2]);
      setShowAlert(true);
      closeToast();
      return true;
    }
    if (password.length < 6) {
      setError(statusMessages[3]);
      setShowAlert(true);
      closeToast();
      return true;
    }
    if (usersData.some((user) => user.email === email)) {
      setError(statusMessages[1]);
      setShowAlert(true);
      closeToast();
      return true;
    }
    if (usersData.some((user) => user.username === username)) {
      setError(statusMessages[5]);
      setShowAlert(true);
      closeToast();
      return true;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateData()) return;
    addUser(formFields);
    setFormFields(defaultFormFields);
    setError(statusMessages[4]);
    setShowAlert(true);
    closeToast();
  };
  return (
    <div className="user-creation-form-container">
      <div className="user-creation-form-title"> Create New User</div>
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
        <button type="submit">Add User</button>
        {showAlert && <Toast color={error.color} message={error.message} />}
      </form>
    </div>
  );
};

export default UserCreationForm;
