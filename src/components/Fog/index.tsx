import cl from "classnames";

import styles from "./style.module.scss";

interface FogProps {
  className?: string;
}

const Fog: React.FC<FogProps> = ({ className }) => {
  return (
    <div className={cl(className, styles.fog)}>
      <img
        className={styles.fog__img}
        src="./fog/fog1.png"
        style={{ "--stork": 3 } as React.CSSProperties}
        alt=""
      />
      <img
        className={styles.fog__img}
        src="./fog/fog2.png"
        style={{ "--stork": 5 } as React.CSSProperties}
        alt=""
      />
    </div>
  );
};

export default Fog;
