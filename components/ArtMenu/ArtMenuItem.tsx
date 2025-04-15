import Link from 'next/link'
import Image from 'next/image';

import cl from 'classnames'

import styles from './style.module.scss'

import { ArtButton } from '../ArtButton';

interface ArtMenuItemProps {
    id: number;
    href: string;
    image: string;
    title: string;
    isOpened: boolean;
    onClick: (event: React.MouseEvent)=>void;
}

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
  id,
  href,
  image,
  title,
  isOpened,
  onClick
}) => {
  console.log(isOpened)
    return (<Link   
        href={href}
        onClick={onClick}
        className={cl(styles.artMenuItem, isOpened && styles.artMenuItemActive)}
    >
        <h3 className={styles.artMenuTitle}>{title}</h3>
        <div className={cl(
          styles.cardMore,
          styles.artMenuCard
        )}>
            <ArtButton
                onClick={()=>{}}
                className={styles.cardMoreButton}
            >
                More
            </ArtButton>
           <Image
                className={styles.cardMoreImage}
                src={image}
                alt={title}
                width="271"
                height="184"
           />
        </div>
    </Link>)
};