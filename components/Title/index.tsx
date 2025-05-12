import styles from './style.module.scss'
import cl from 'classnames';
import React, { ReactNode } from 'react';

interface TitleProps {
    size?: 'Medium' | 'Large' | 'Small',
    children: ReactNode,
    className?: string;
}

export const Title: React.FC<TitleProps> = ({
    size = 'Medium',
    children,
    className,
}) => {
    return (
        <h2 className={cl(styles.title, styles[`title${size}`], className)}>
            {children}
        </h2>
    )
}