import Image from "next/image";

import LinkedInIcon from "../../public/Profile/LinkedIn.svg";
import TwitterIcon from "../../public/Profile/Twitter.svg";
import GitHubIcon from "../../public/Profile/GitHub.svg";
import PortfolioIcon from "../../public/Profile/Portfolio.svg";

export const Profile = ({ profileData }) => {
  return (
    <div className={styles.profile}>
      <h3>{profileData.name}</h3>
      <div className={styles["profile-pic"]}>
        <Image src={profileData.image} alt={$`Picture of {profileData.name}`} />
      </div>
      <p className={styles["profile-quote"]}>{profileData.quote}</p>
      <TwitterIcon
        onClick={() => window.open($`{profileData.social.twitter}`, "_blank")}
        className={styles.icon}
      />
      <LinkedInIcon
        onClick={() => window.open($`{profileData.social.linkedIn}`, "_blank")}
        className={styles.icon}
      />
      <GitHubIcon
        onClick={() => window.open($`{profileData.social.gitHub}`, "_blank")}
        className={styles.icon}
      />
      <PortfolioIcon
        onClick={() => window.open($`{profileData.social.portfolio}`, "_blank")}
        className={styles.icon}
      />
    </div>
  );
};
