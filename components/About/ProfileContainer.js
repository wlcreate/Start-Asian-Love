import styles from "../../styles/About/ProfileContainer.module.scss";
import { Profile } from "./Profile";

export const ProfileContainer = ({ profiles }) => {
  return (
    <div className={styles["profile-container"]}>
      {profiles?.map((profileData) => {
        return <Profile key={profileData._id} {...profileData} />;
      })}
    </div>
  );
};
