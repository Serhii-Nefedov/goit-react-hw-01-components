import PropTypes from "prop-types";
import defaultImage from "./default2.jpg";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={styles.item} key={id}>
        <span
          className={isOnline ? styles.statusOnline : styles.statusOffline}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="аватар друга"
          width="140"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
