import { useState, ReactNode, useMemo } from "react";

interface GalleryItem {
  id: number;
  position: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface AnimatedMenuItem {
  id: string;
  title: string;
  text?: string;
  imageUrl: string;
}

export interface ModalInfo {
  title: string;
  titleUrl: string;
  titleUrl2?: string;
  content: ReactNode;
  coverImage: string;
  listImages: {
    src: string;
    type: "color" | "dark";
  }[];
}

interface ArtMenuLinks {
  id: number;
  href: string;
  title: string;
  image: string;
  active: boolean;
  modalInfo: ModalInfo;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    position: "Co-founder / Ecosystem Chief",
    title: "@jaypegsonly",
    description:
      "<strong>@jaypegsonly</strong> was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.",
    imageUrl: "/gallery/jaypegsonly.jpg",
  },
  {
    id: 2,
    position: "Co-founder / Operations Chief",
    title: "@oxsuperpotato",
    description:
      "Before crypto, <strong>@0xSuperPotato</strong> was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.",
    imageUrl: "/gallery/oxsuperpotato.jpg",
  },
  {
    id: 3,
    position: "Co-founder / Software Chief",
    title: "@webelart",
    description:
      "<strong>@webelart</strong> is a corporate which helps different people from beginning to professional became better in software engineering. To be light and love of this world, to be a loved by the universe.",
    imageUrl: "/gallery/jaypegsonly.jpg",
  },
  {
    id: 4,
    position: "Co-founder / Design Chief",
    title: "@madking3126",
    description:
      "<strong>@MadKing3126</strong> has spent a huge portion of his life around games. He's experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.",
    imageUrl: "/gallery/madking3126.jpg",
  },
  {
    id: 5,
    position: "Co-founder / Blockchain Chief",
    title: "@itscuzzo",
    description:
      "<strong>@ItsCuzzo</strong> is the set of brains behind Dusktopia's smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.",
    imageUrl: "/gallery/itscuzzo.jpg",
  },
  {
    id: 6,
    position: "Co-founder / Ecosystem Chief",
    title: "@jaypegsonly",
    description:
      "<strong>@jaypegsonly</strong> was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.",
    imageUrl: "/gallery/jaypegsonly.jpg",
  },
  {
    id: 7,
    position: "Co-founder / Operations Chief",
    title: "oxsuperpotato",
    description:
      "Before crypto, <strong>@0xSuperPotato</strong> was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.",
    imageUrl: "/gallery/oxsuperpotato.jpg",
  },
  {
    id: 8,
    position: "Co-founder / Design Chief",
    title: "@madking3126",
    description:
      "<strong>@MadKing3126</strong> has spent a huge portion of his life around games. He's experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.",
    imageUrl: "/gallery/madking3126.jpg",
  },
  {
    id: 9,
    position: "Co-founder / Blockchain Chief",
    title: "@itscuzzo",
    description:
      "<strong>@ItsCuzzo</strong> is the set of brains behind Dusktopia's smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.",
    imageUrl: "/gallery/itscuzzo.jpg",
  },
];

export const ANIMATED_MENU_ITEMS: AnimatedMenuItem[] = [
  {
    id: "01",
    title: "Genesis lands drop",
    text: "An original collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.",
    imageUrl: "/animatedMenu/01.png",
  },
  {
    id: "02",
    title: "Staking goes live",
    text: "The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.",
    imageUrl: "/animatedMenu/02.png",
  },
  {
    id: "03",
    title: "New worlds emerge",
    text: "Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.",
    imageUrl: "/animatedMenu/03.png",
  },
  {
    id: "04",
    title: "Avatar collection drop",
    text: "Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.",
    imageUrl: "/animatedMenu/04.png",
  },
  {
    id: "05",
    title: "Let's the game begin",
    imageUrl: "/animatedMenu/05.png",
  },
];

export const SOCIAL_NETWORKS = [
  {
    id: 1,
    title: "Discord",
    className: "discord",
    link: "https://discord.com/",
  },
  {
    id: 2,
    title: "Twitter",
    className: "twitter",
    link: "https://x.com/",
  },
  {
    id: 3,
    title: "AntDesign",
    className: "antDesign",
    link: "https://ant.design/",
  },
];

export const ART_MENU_LINKS: ArtMenuLinks[] = [
  {
    id: 1,
    href: "/",
    title: "Blighted Badlands",
    image: "/images/badlands/preview.jpg",
    active: false,
    modalInfo: {
      title: "Badlands",
      content: (
        <>
          <p>Modern-day Dusktopia begins here</p>
          <p>
            The first thing that counts here is survival Only then can you think
            of profit; then finally domination
          </p>
          <p>
            Forge your alliances with the EON Corporation, the rival mafia
            gangs, or even an utterly corrupt police force - and crush all
            standing in your way
          </p>
        </>
      ),
      titleUrl: "/images/badlands/title.png",
      coverImage: "/images/badlands/modal_cover.jpg",
      listImages: [
        {
          src: "/images/badlands/list/badlands_01.png",
          type: "color",
        },
        {
          src: "/images/badlands/list/badlands_02.png",
          type: "color",
        },
        {
          src: "/images/badlands/list/badlands_03.png",
          type: "color",
        },
        {
          src: "/images/badlands/list/badlands_04.png",
          type: "color",
        },
        {
          src: "/images/badlands/list/badlands_01.png",
          type: "dark",
        },
        {
          src: "/images/badlands/list/badlands_02.png",
          type: "dark",
        },
        {
          src: "/images/badlands/list/badlands_03.png",
          type: "dark",
        },
        {
          src: "/images/badlands/list/badlands_04.png",
          type: "dark",
        },
      ],
    },
  },
  {
    id: 2,
    href: "/",
    title: "Glacial Frontier",
    image: "/images/glacial_frontier/preview.jpg",

    active: false,
    modalInfo: {
      title: "Glacial Frontier",
      titleUrl: "/images/glacial_frontier/title_1.png",
      titleUrl2: "/images/glacial_frontier/title_2.png",
      content: (
        <>
          <p>The home of everything warfare in Dusktopia</p>
          <p>
            Mercenaries and soldiers take payouts from the Cabal to do its
            bidding - but some want more for themselves, and are willing to go
            against power itself to get it
          </p>
          <p>Which side are you joining?</p>
        </>
      ),
      coverImage: "/images/glacial_frontier/modal_cover.jpg",
      listImages: [
        {
          src: "/images/glacial_frontier/list/glacial_frontier_01.png",
          type: "color",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_02.png",
          type: "color",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_03.png",
          type: "color",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_04.png",
          type: "color",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_01.png",
          type: "dark",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_02.png",
          type: "dark",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_03.png",
          type: "dark",
        },
        {
          src: "/images/glacial_frontier/list/glacial_frontier_04.png",
          type: "dark",
        },
      ],
    },
  },
  {
    id: 3,
    href: "/",
    title: "Sundered Grove",
    image: "/images/sundered_grove/preview.jpg",
    active: false,
    modalInfo: {
      title: "Sundered Grove",
      titleUrl: "/images/sundered_grove/title_1.png",
      titleUrl2: "/images/sundered_grove/title_2.png",
      content: (
        <>
          <p>Dusktopia’s last remaining sanctuary of peace</p>
          <p>
            Researchers and scientists congregate here to live in religious
            pacifism, spending their time developing a renewable energy source
            for the world
          </p>
          <p>
            A small faction wants more - selling Aurium on the black market for
            their own personal gain
          </p>
          <p>Will you root out the traitors or join them?</p>
        </>
      ),
      coverImage: "/images/sundered_grove/modal_cover.jpg",
      listImages: [
        {
          src: "/images/sundered_grove/list/sundered_grove_01.png",
          type: "color",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_02.png",
          type: "color",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_01.png",
          type: "color",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_02.png",
          type: "color",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_01.png",
          type: "dark",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_02.png",
          type: "dark",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_01.png",
          type: "dark",
        },
        {
          src: "/images/sundered_grove/list/sundered_grove_02.png",
          type: "dark",
        },
      ],
    },
  },
  {
    id: 4,
    href: "/",
    title: "Sky Citadel",
    image: "/images/sky_citadel/preview.jpg",
    active: false,
    modalInfo: {
      title: "Sky Citadel",
      titleUrl: "/images/sky_citadel/title_1.png",
      titleUrl2: "/images/sky_citadel/title_2.png",
      content: (
        <>
          <p>These are where the apex predators in Dusktopia reside</p>
          <p>
            The political and economic masters of all society: living high above
            the suffering of ordinary denizens, and calmly plot elevated
            pursuits like space colonization in absolute peace
          </p>
          <p>
            If you’re lucky enough to be part of it, hold on tight - everybody
            wants what you have
          </p>
        </>
      ),
      coverImage: "/images/sky_citadel/modal_cover.jpg",
      listImages: [
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "color",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "color",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "color",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "color",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "dark",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "dark",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "dark",
        },
        {
          src: "/images/sky_citadel/list/sky_citadel.png",
          type: "dark",
        },
      ],
    },
  },
];

export const LOGOS = [
  { id: 1, title: "Logo" },
  { id: 2, title: "Logo" },
  { id: 3, title: "Logo" },
  { id: 4, title: "Logo" },
];

export const NAVIGATION_LINKS = [
  {
    id: 1,
    title: "Home",
    href: "/",
    active: true,
  },
  {
    id: 2,
    title: "Factions",
    href: "/",
    active: false,
  },
  {
    id: 3,
    title: "Roadmap",
    href: "/",
    active: false,
  },
];
