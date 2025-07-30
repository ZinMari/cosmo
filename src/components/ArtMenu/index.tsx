import styles from "./style.module.scss";
import { ArtMenuItem } from "./ArtMenuItem";
import { useState, useMemo } from "react";
import { Modal } from "../Modal";
import { GlassCard } from "../GlassCard";
import type { ModalInfo } from "@/src/constants/constants";
import { ART_MENU_LINKS } from "@/src/constants/constants";

export const ArtMenu: React.FC = () => {
  const [openedId, setOpenedId] = useState(0);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  const nextModalInfo = useMemo<ModalInfo | null>(() => {
    if (!modalInfo) return null;

    let nextModalInfo = null;
    for (let i = 0; i < ART_MENU_LINKS.length; i++) {
      if (
        ART_MENU_LINKS[i].modalInfo.title === modalInfo.title &&
        ART_MENU_LINKS[i + 1]
      ) {
        nextModalInfo = ART_MENU_LINKS[i + 1].modalInfo;
        break;
      }
    }

    return nextModalInfo;
  }, [modalInfo]);
  return (
    <>
      <div className={styles.artMenu}>
        {ART_MENU_LINKS.map((link) => (
          <ArtMenuItem
            key={link.id}
            onClick={(event) => {
              event.preventDefault();
              setOpenedId(link.id !== openedId ? link.id : 0);
            }}
            onClickButton={() => {
              setModalInfo(link.modalInfo);
            }}
            isOpened={link.id === openedId}
            {...link}
          />
        ))}
      </div>
      {modalInfo && (
        <Modal
          isNext={!!nextModalInfo}
          backgroundUrl={modalInfo.coverImage}
          onClickClose={() => setModalInfo(null)}
          onClickNext={() => setModalInfo(nextModalInfo)}
          titleUrl={modalInfo.titleUrl}
          titleUrl2={modalInfo.titleUrl2}
          title={modalInfo.title}
          contentBlock={modalInfo.content}
          listImages={modalInfo.listImages}
        />
      )}
    </>
  );
};
