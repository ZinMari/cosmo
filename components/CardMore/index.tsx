import { ArtButton } from '../ArtButton';
import styles from './style.module.scss'
import Image from 'next/image';

interface CardMoreProps {
    src: string;
    description: string;
    onClick: ()=>void;
}

export const CardMore: React.FC<CardMoreProps> = (
    {
        src,
        description,
        onClick,
    }
) => {
    return (
        <div className={styles.cardMore}>
            <ArtButton 
                type="YellowPink"
                onClick={onClick}
                className={styles.cardMoreButton}
            >
                More
            </ArtButton>
           <Image
                className={styles.cardMoreImage}
                src={src}
                alt={description}
                width="271"
                height="184"
           />
        </div>
    );
}