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
