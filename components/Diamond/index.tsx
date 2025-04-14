import styles from './style.module.scss';
import cl from 'classnames'

interface DiamondProps {
    type?: 'Gradient' | 'White',
}

export const Diamond: React.FC<DiamondProps> = ({
    type = 'Gradient',
}) => {
    return (
        <span
            className={cl(styles.diamond, styles[`diamond${type}`])}
        />
    );
}