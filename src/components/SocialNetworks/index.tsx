import { SOCIAL_NETWORKS } from "@/src/constants/constants";
import styles from "./style.module.scss";
import cl from "classnames";

export const SocialNetworks: React.FC = ({}) => {
  return (
    <ul className={styles.socialNetworks}>
      {SOCIAL_NETWORKS.map((socialNetwork) => (
        <li key={socialNetwork.id}>
          <a
            className={cl(
              styles.socialNetworks__link,
              styles[`socialNetworks__${socialNetwork.className}`]
            )}
            href={socialNetwork.link}
            target="_blank"
            rel="noreferrer"
          >
            {socialNetwork.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
