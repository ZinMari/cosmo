import { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';

export type TypeArtButton = 'BluePurple' | 'GreenYellow' | 'Blue' | 'YellowPink' | 'Transparent' | 'White';

interface ArtButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    type?: TypeArtButton;
}



export const ArtButton: React.FC<ArtButtonProps> = ({
    onClick,
    children,
    className,
    type,
}) => {
    return (
        <button
            className={cl(
                styles.artButton, 
                type && styles.artButtonType,
                type && styles[`artButton${type}`],
                className,
            )}
            onClick={onClick}
        >
            <span className={styles.artButtonText}>{children}</span>
            <span className={styles.artButtonAngleLeft} />
            <span className={styles.artButtonAngleRight} />
        </button>
    );
}