import "./SignUp.css";

function SignUp() {
  return (
    <form>
      <div>
        <label htmlFor="email">email</label> <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        {/* {password.length >= 8 ? "✅" : "❌"} {`length: ${password.length} >= 8`} */}
      </div>
      <div>
        <label htmlFor="confirm-password">confirm password</label>{" "}
        <input type="password" id="confirm-password" />{" "}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default SignUp;
