import Image from "next/image";
import styles from "../../styles/About/Profile.module.scss";
import { urlFor } from "../../lib/sanity";

import LinkedInIcon from "../../public/Profile/LinkedIn.svg";
import TwitterIcon from "../../public/Profile/Twitter.svg";
import GitHubIcon from "../../public/Profile/GitHub.svg";
import PortfolioIcon from "../../public/Profile/Portfolio.svg";

export const Profile = ({ name, image, social, bio, quote }) => {
  console.log(social);
  return (
    <div className={styles.profile}>
      <h3>{name}</h3>
      <div className={styles["profile-pic"]}>
        <Image src={urlFor(image).url()} alt={`Picture of ${name}`} width={225} height={225} />
      </div>
      <p className={styles["profile-quote"]}>{quote}</p>
      <p className={styles["profile-bio"]}>{bio[0].children[0].text}</p>
      <TwitterIcon
        onClick={() => window.open(`${social.twitter}`, "_blank")}
        className={styles.icon}
      />
      <LinkedInIcon
        onClick={() => window.open(`${social.linkedIn}`, "_blank")}
        className={styles.icon}
      />
      <GitHubIcon
        onClick={() => window.open(`${social.gitHub}`, "_blank")}
        className={styles.icon}
      />
      <PortfolioIcon
        onClick={() => window.open(`${social.portfolio}`, "_blank")}
        className={styles.icon}
      />
    </div>
  );
};
