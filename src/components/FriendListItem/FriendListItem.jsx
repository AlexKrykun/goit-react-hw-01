import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline = 'false' }) => {
  const className = isOnline === true ? 'On' : 'Off';

  return (
    <>
      <img src={avatar} alt='Avatar' width={48} />
      <p>{name}</p>
      <p className={`${styles.status} ${styles[className]}`}>
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </>
  );
};