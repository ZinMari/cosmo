import styles from './style.module.scss'
import cl from 'classnames'

interface SocialNetworksProps {}

const socialNetworks = [
    {
        id: 1,
        title: 'Discord',
        className: 'Discord',
        link:  "https://discord.com/",
    },
    {
        id: 2,
        title: 'Twitter',
        className: 'Twitter',
        link:  "https://x.com/",
    },
    {
        id: 3,
        className: 'AntDesign',
        title: 'AntDesign',
        link:  "https://ant.design/",
    },
]

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
    return (
        <ul className={styles.socialNetworks}>
            {socialNetworks.map((socialNetwork) => (
                <li
                    key={socialNetwork.id}
                    className={styles.socialNetworksItem}
                >
                    <a
                        className= {cl(styles.socialNetworksLink, styles[`socialNetworks${socialNetwork.className}`])} 
                        href={socialNetwork.link}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {socialNetwork.title}
                    </a>
                </li>
            ))}
            <li></li>
        </ul>
    );
}