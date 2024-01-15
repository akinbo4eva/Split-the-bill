import { useState } from "react";
import Button from "./Button";

function SplitAbillForm({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [myexp, setMyExp] = useState("");
  const billByFriend = bill ? bill - myexp : "";
  const [whoispaying, setWhoisPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !myexp) return;

    handleSplitBill(whoispaying === "user" ? billByFriend : -myexp);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>
      <label>
        💰Bill value<span>$</span>
      </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>
        💁Your expense<span>$</span>
      </label>
      <input
        type="text"
        value={myexp}
        onChange={(e) =>
          setMyExp(
            Number(e.target.value) > bill ? myexp : Number(e.target.value)
          )
        }
      />
      <label>
        💁{selectedFriend.name}'s expense<span>$</span>
      </label>
      <input type="text" value={billByFriend} disabled />

      <label>🤑 Who is paying the bill</label>
      <select onChange={(e) => setWhoisPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}
export default SplitAbillForm;
