import "../index.css";
import Button from "./Button";

function Friends({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;

  // function handleClick() {
  //   setIsSelect((selected) => !selected);
  // }

  return (
    <li className={isSelected ? "selected" : " "}>
      <img src={friend.image} alt="pic" />
      {friend.name}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button clickFunc={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friends;
