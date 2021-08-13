import styles from "../../styles/About/components/ProfileContainer.module.scss";
import { Profile } from "./Profile";

export const ProfilesContainer = ({ profiles }) => {
  return (
    <div className={styles["profile-container"]}>
      {profiles?.map((profileData) => {
        return <Profile key={profileData._id} {...profileData} />;
      })}
    </div>
  );
};
