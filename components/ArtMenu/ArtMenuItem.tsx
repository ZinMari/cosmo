import Image from 'next/image';

import cl from 'classnames'

import styles from './style.module.scss'

import { ArtButton, TypeArtButton } from '../ArtButton';

interface ArtMenuItemProps {
    id: number;
    href: string;
    image: string;
    title: string;
    isOpened: boolean;
    onClick: (event: React.MouseEvent)=>void;
    onClickButton: ()=> void;
}

const getTypeById = (id:number):TypeArtButton => {
    if(id === 1) {
      return 'yellowPink'
    }

    if(id === 2) {
      return 'blue'
    }

    if(id === 3) {
      return 'bluePurple'
    }

    return 'greenYellow'
}

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
  id,
  image,
  title,
  isOpened,
  onClick,
  onClickButton
}) => {
    return (
    <div
        onClick={onClick}
        className={cl(styles.artMenuItem, isOpened && styles.artMenuItemActive)}
    >
        <h3 className={styles.artMenuTitle}>{title}</h3>
        <div className={cl(
          styles.cardMore,
          styles.artMenuCard
        )}>
            <ArtButton
                type={getTypeById(id)}
                onClick={onClickButton}
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
        <span className={styles.artMenuDecorator}/>
    </div>)
};