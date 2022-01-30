import FriendListItem from "camponents/FriendListItem";
// import friends from "../friends.json";

export default function FriendList({ users }) {
  // let isOnline = true;
  return (
    <ul className="friend-list">
      {users.map((item) => (
        <FriendListItem
          key={item.id}
          id={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
