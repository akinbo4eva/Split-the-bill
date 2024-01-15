import { useState } from "react";
import AddFriendForm from "./Components/AddFriendForm";
import Button from "./Components/Button";
import FriendList from "./Components/FriendList";
import "./index.css";
import { initialFriends } from "./Components/InitialList";
import SplitAbillForm from "./Components/SplitABill";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleIsFormOpened = () => {
    setIsOpen((open) => !open);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((curFriend) =>
      curFriend?.id === friend.id ? null : friend
    );
    setIsOpen(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {isOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button clickFunc={handleIsFormOpened}>
          {isOpen ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitAbillForm
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
