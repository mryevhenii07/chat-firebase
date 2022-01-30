import PropTypes from "prop-types";
export default function FriendListItem({ avatar, name, isOnline, id }) {
  // console.log(friends);
  // console.log(data.friends.friends);
  // return data.friends.map((friend) => {
  // let isOnline = true;
  return (
    <li className="item-friends " key={id}>
      <span className="friends-status">{isOnline === true ? "Yes" : "No"}</span>
      <img className="avatar" src={avatar} alt="Userddd avatar" width="48" />
      <p className="friend-name">{name}</p>
    </li>
  );

  // });
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // isOnline: PropTypes.string.isRequired,
  id: PropTypes.bool.isRequired,
};
