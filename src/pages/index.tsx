import styles from "../styles/home.module.scss";
import cl from "classnames";

import { Logo } from "../components/Logo";
import { SocialNetworks } from "../components/SocialNetworks";
import { ArtButton } from "../components/ArtButton";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { ArtMenu } from "../components/ArtMenu";
import { ArtTitle } from "../components/ArtTitle";
import { AnimatedMenu } from "../components/AnimatedMenu";
import { LogoList } from "../components/LogoList";
import { ArtObject } from "../components/ArtObject";
import { Copyright } from "../components/Copyright";
import { Gallery } from "../components/Gallery";

export default function Home() {
  return (
    <article className={cl(styles.container)}>
      <section className={cl(styles.section, styles.main)}>
        <header className={styles.main__header}>
          <Logo />
          <SocialNetworks />
          <ArtButton onClick={() => {}}>Whitepaper</ArtButton>
        </header>
        <Navigation />
        <div className={styles.main__content}>
          <Title>from dusk to&nbsp;dawn</Title>
          <ul className={styles.main__buttonList}>
            <li>
              <ArtButton onClick={() => {}}>Mint</ArtButton>
            </li>
            <li>
              <ArtButton onClick={() => {}}>Connect Wallet</ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.earth)}>
        <Title size="large">Factions</Title>
        <ArtMenu></ArtMenu>
      </section>
      <section className={cl(styles.section, styles.animation)}>
        <ArtTitle type="up" className={styles.artTitle}>
          Our way
        </ArtTitle>
        <Title size="small" className={styles.smallTitle}>
          Road
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L0 -1.70474e-06L-1.70474e-06 39L19.3692 19.7599L19.3692 39Z"
              fill="white"
            />
          </svg>
          Map
        </Title>
        <AnimatedMenu />
      </section>
      <section className={cl(styles.section, styles.logos)}>
        <ArtTitle type="down" className={styles.artTitle}>
          Partners
        </ArtTitle>
        <Title size="small" className={styles.subTitle}>
          COLLABORATIONS
        </Title>
        <LogoList className={styles.logos__list} />
      </section>
      <section className={cl(styles.section, styles.questions)}>
        <div className={styles.questions__content}>
          <ArtTitle type="down" className={styles.artTitle}>
            FAQ
          </ArtTitle>
          <Title size="small" className={styles.subTitle}>
            HAVE
            <svg
              className={styles.question__star}
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <g clipPath="url(#clip0_1_615)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 1.12C30 0.501441 29.4986 0 28.88 0H27.12C26.5014 0 26 0.501441 26 1.12V11.949C26 13.18 24.3027 13.5099 23.8416 12.3685L19.7849 2.32808C19.5532 1.75456 18.9004 1.47747 18.327 1.70919L16.6951 2.3685C16.1216 2.60021 15.8445 3.25298 16.0762 3.82651L20.4009 14.5306C20.858 15.6618 19.4333 16.6048 18.5705 15.7421L10.4072 7.57876C9.96979 7.14137 9.26064 7.14137 8.82325 7.57876L7.57876 8.82325C7.14137 9.26064 7.14137 9.96979 7.57876 10.4072L14.9094 17.7378C15.7845 18.6129 14.8031 20.0516 13.669 19.5561L4.16906 15.4055C3.60223 15.1578 2.94199 15.4166 2.69433 15.9834L1.98969 17.5962C1.74204 18.163 2.00078 18.8233 2.5676 19.0709L13.5145 23.8537C14.6265 24.3396 14.2796 26 13.066 26H1.12C0.501441 26 0 26.5014 0 27.12V28.88C0 29.4986 0.501441 30 1.12 30H13.066C14.2796 30 14.6265 31.6604 13.5144 32.1462L2.56762 36.9292C2.0008 37.1767 1.74206 37.837 1.98971 38.4037L2.69435 40.0165C2.94199 40.5835 3.60226 40.8422 4.16906 40.5944L13.669 36.444C14.8031 35.9484 15.7845 37.387 14.9094 38.2623L7.57876 45.5927C7.14137 46.0303 7.14137 46.7393 7.57876 47.1766L8.82328 48.4212C9.26064 48.8586 9.96979 48.8586 10.4072 48.4212L18.5705 40.2578C19.4333 39.3952 20.858 40.3382 20.4009 41.4694L16.0762 52.1735C15.8445 52.747 16.1216 53.3996 16.6951 53.6315L18.3269 54.2909C18.9004 54.5224 19.5532 54.2455 19.7849 53.6718L23.8416 43.6316C24.3027 42.49 26 42.8201 26 44.051V54.88C26 55.4985 26.5014 56 27.12 56H28.88C29.4986 56 30 55.4985 30 54.88V44.051C30 42.8201 31.6974 42.49 32.1586 43.6316L36.2149 53.6718C36.4468 54.2455 37.0994 54.5224 37.6732 54.2909L39.305 53.6315C39.8784 53.3996 40.1556 52.747 39.9238 52.1735L35.5992 41.4694C35.142 40.3382 36.5666 39.3952 37.4296 40.2578L45.5927 48.4212C46.0303 48.8586 46.7393 48.8586 47.1766 48.4212L48.4212 47.1766C48.8586 46.7393 48.8586 46.0303 48.4212 45.5927L41.0906 38.2623C40.2156 37.387 41.197 35.9484 42.331 36.444L51.8308 40.5944C52.3978 40.8422 53.058 40.5835 53.3056 40.0165L54.0103 38.4037C54.2578 37.837 53.9991 37.1767 53.4324 36.9292L42.4855 32.1462C41.3736 31.6604 41.7203 30 42.9341 30H54.88C55.4985 30 56 29.4986 56 28.88V27.12C56 26.5014 55.4985 26 54.88 26H42.9341C41.7203 26 41.3734 24.3396 42.4855 23.8537L53.4324 19.0709C53.9991 18.8233 54.2578 18.163 54.0103 17.5962L53.3056 15.9834C53.058 15.4166 52.3978 15.1578 51.8308 15.4055L42.331 19.5561C41.197 20.0516 40.2156 18.6129 41.0906 17.7378L48.4212 10.4072C48.8586 9.96976 48.8586 9.26064 48.4212 8.82325L47.1766 7.57873C46.7393 7.14134 46.0303 7.14134 45.5927 7.57873L37.4296 15.7421C36.5666 16.6048 35.142 15.6618 35.5992 14.5305L39.9238 3.82651C40.1556 3.25298 39.8784 2.60021 39.305 2.3685L37.6732 1.70919C37.0994 1.47747 36.4468 1.75456 36.2149 2.32808L32.1586 12.3685C31.6974 13.5099 30 13.18 30 11.949V1.12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_615">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            ANY
            <br />
            QUESTIONS?
          </Title>
          <ArtObject />
        </div>
      </section>
      <section className={cl(styles.section, styles.alliesGallery)}>
        <ArtTitle className={styles.artTitle} type="down">
          Members
        </ArtTitle>
        <Title className={styles.subTitle}>
          MEET
          <br />
          OUR
          <svg width="72" height="44" fill="none" className={styles.superEye}>
            <path
              fill="#fff"
              d="M36.592.5C25.106.5 17.916 8.833 17.916 22.084s7.19 21.554 18.676 21.554c11.487 0 18.676-8.304 18.676-21.554C55.268 8.833 48.078.5 36.592.5m0 4.803c8.285 0 13.48 6.48 13.48 16.78 0 10.271-5.195 16.752-13.48 16.752s-13.48-6.48-13.48-16.751c0-10.3 5.195-16.781 13.48-16.781"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M7.04 19.947c2.734 2.995 6.866 7.178 11.637 10.86 5.928 4.575 12.39 8.017 18.161 8.017 5.712 0 11.53-3.387 16.794-7.928 4.29-3.7 7.902-7.887 10.494-10.946-2.844-2.831-6.843-6.185-11.285-8.99-5.396-3.407-11.097-5.784-16.003-5.784-4.954 0-11.305 2.413-17.366 5.847-4.97 2.816-9.45 6.148-12.432 8.924m9.88-13.428C23.21 2.956 30.52 0 36.838 0c6.368 0 13.08 2.992 18.767 6.583 5.744 3.628 10.796 8.093 13.917 11.516l1.54 1.689-1.485 1.737q-.45.527-.986 1.163c-2.6 3.077-6.676 7.9-11.578 12.128C51.498 39.574 44.47 44 36.838 44c-7.571 0-15.201-4.37-21.323-9.095C9.298 30.108 4.166 24.573 1.527 21.543L0 19.79l1.58-1.706c3.244-3.501 8.995-7.97 15.34-11.565"
              clipRule="evenodd"
            />
          </svg>
          TEAM
        </Title>
        <Gallery />
      </section>
      <section className={cl(styles.section, styles.footer)}>
        <Logo />
        <SocialNetworks />
        <Copyright className={styles.footer__copyright} />
      </section>
    </article>
  );
}
