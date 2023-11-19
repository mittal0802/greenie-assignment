//take userdata as prop and display it in popup and create a button to make report

import "./popup.styles.scss";

const Popup = ({ user, onClose }) => {
  const { username, email, phone, createdAt } = user;

  return (
    <div className="popup">
      <div className="popup_inner">
        <div>Username: {username}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <div>Created At: {createdAt}</div>
        <button onClick={onClose}>Make Report</button>
      </div>
    </div>
  );
};
export default Popup;
