import FriendListItem from "camponents/FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

// import friends from "../friends.json";

export default function FriendList({ users }) {
  // let isOnline = true;
  return (
    <ul className={styles.friendList}>
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
FriendList.propTypes = {
  users: PropTypes.array.isRequired,
};
