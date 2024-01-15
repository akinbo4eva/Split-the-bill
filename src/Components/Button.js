export default function Button({ children, clickFunc }) {
  return (
    <button onClick={clickFunc} className="button">
      {children}
    </button>
  );
}
