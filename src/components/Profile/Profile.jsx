import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
import styles from "./Profile.module.css";
console.log(defaultImage);

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="240"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.list}>
        <span className={styles.label}>Follower </span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Views </span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Likes </span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
