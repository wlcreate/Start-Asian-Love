import { Profile } from "./Profile";

export const ProfileContainer = ({ profiles }) => {
  return (
    <div className={styles["profile-container"]}>
      {profiles &&
        profiles.map((profileData) => {
          return <Profile key={profileData.id} profileData={profileData} />;
        })}
    </div>
  );
};
