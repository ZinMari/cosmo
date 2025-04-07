import styles from './style.module.scss'
import cl from 'classnames';
import React, { ReactNode } from 'react';

interface TitleProps {
    size?: 'Medium' | 'Large',
    children: ReactNode,
}

export const Title: React.FC<TitleProps> = ({
    size = 'Medium',
    children,
}) => {
    console.log(size)
    return (
        <h2 className={cl(styles.title, styles[`title${size}`])}>
            {children}
        </h2>
    )
}