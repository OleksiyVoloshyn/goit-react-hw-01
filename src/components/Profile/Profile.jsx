import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.profile}>
              <div className={styles.userInfo}>
                <img className={styles.image} src={image} alt="User avatar"/>
                <p className={styles.title}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.tag}>{location}</p>
              </div>
              <div className={styles.profileStats}>
                <div className={styles.liStats}>
                  <span>Followers</span> <span>{stats.followers}</span>
                </div>
                <div className={styles.liStats}> 
                  <span>Views</span> <span>{stats.views}</span>
                </div>
                <div className={styles.liStats}>
                  <span>Likes</span ><span>{stats.likes}</span>
                </div>
              </div>
        </div>
    )
};


export default Profile;
