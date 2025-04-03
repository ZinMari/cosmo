import styles from '../styles/home.module.scss';
import cl from 'classnames'

import {Logo} from '../components/Logo';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header>
        <Logo/>
        {/* <SocialNetworks/>
        <Button onClick={()=>{}}>
          Whitepaper
        </Button> */}
        </header>
        {/* <Navigation/>
        <div>
          <Title 
            type='h2'
          >
            from dusk to dawn
          </Title>
          <ul>
            <li>
            <Button onClick={()=>{}}>
              Mint
            </Button>
            </li>
            <li>
              <Button onClick={()=>{}}>
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div> */}
      </section>
    </div>
  );
}
