import styles from '../styles/home.module.scss';
import cl from 'classnames'

import {Logo} from '../components/Logo';
import {SocialNetworks} from '../components/SocialNetworks';
import {ArtButton} from '../components/ArtButton';
import {Navigation} from '../components/Navigation';
import {Title} from '../components/Title';
import { ArtMenu } from '@/components/ArtMenu';
import { ArtTitle } from '@/components/ArtTitle';
import { AnimatedMenu } from '@/components/AnimatedMenu';
import { LogoList } from '@/components/LogoList';

export default function Home() {
  return (
    <article>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header
          className={styles.header}
        >
          <Logo/>
          <SocialNetworks/>
          <ArtButton onClick={()=>{}}>
            Whitepaper
          </ArtButton>
        </header>
        <Navigation/>
        <div>
          <Title>
            from dusk to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}
          >
            <li>
            <ArtButton onClick={()=>{}}>
              Mint
            </ArtButton>
            </li>
            <li>
              <ArtButton onClick={()=>{}}>
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size = 'Large'>
          Factions
        </Title>
        <ArtMenu></ArtMenu>
      </section>
      <section className={cl(styles.section, styles.sectionAnimation)}>
        <ArtTitle type='up' className={styles.artTitle}>Our way</ArtTitle>
        <Title size='Small' className={styles.smallTitle}>
          Road
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
           <path fillRule="evenodd" clipRule="evenodd" d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L0 -1.70474e-06L-1.70474e-06 39L19.3692 19.7599L19.3692 39Z" fill="white"/>
          </svg>
          Map
        </Title>
        <AnimatedMenu />
      </section>
      <section className={cl(styles.section, styles.sectionLogos)}>
        <ArtTitle type='down' className={styles.artTitle}>Partners</ArtTitle>
        <Title size='Small' className={styles.subTitle}>COLLABORATIONS</Title>
        <LogoList className={styles.logoList}/>
      </section>
    </article>
  );
}
