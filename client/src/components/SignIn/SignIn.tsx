import "./SignIn.css";

function SignIn() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" id="password" className="form-input" />
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default SignIn;
