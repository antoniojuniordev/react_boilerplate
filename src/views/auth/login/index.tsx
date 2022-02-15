export default function Login() {
  const msg = process.env.REACT_APP_URL;
  return (
    <div>
      <h2>Logins {msg}</h2>
    </div>
  );
}
