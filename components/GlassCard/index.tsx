import cl from 'classnames';

import styles from './style.module.scss'
import React from 'react';
import Image from 'next/image';

interface GlassCardProps {
    imageUrl: string;
    type: "color" | 'dark';
    imgNumber: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    imgNumber,
    imageUrl,
    type,
}) => {
    console.log(imgNumber)
    return (
        <div className={cl(styles.classCard, styles[type], styles[`classCard__item${imgNumber}`])}>
        <Image
            src={imageUrl} alt='Card' className={styles.classCardImage} fill={true}
        />
    </div>
    )
}