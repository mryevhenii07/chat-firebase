import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={styles.itemFriends} key={id}>
      <span
        className={
          isOnline ? styles.friendsStatusGreen : styles.friendsStatusRed
        }
      ></span>

      <img
        className={styles.avatar}
        src={avatar}
        alt="Userddd avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
    </li>
  );

  // });
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
