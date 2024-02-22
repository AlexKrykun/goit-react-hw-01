import styles from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <article>
      <div className={styles.card}>
        <div className={styles.photo}>
          <img className={styles.avatar} src={image} alt='User avatar' width={312} />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.rating}>
        <li className={styles.ratingItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.ratingItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.ratingItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </article>
  );
};