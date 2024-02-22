
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend, index) => (
        <li key={index} className={styles.friendListItem}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};