import { useEffect, ReactNode } from 'react';
import { ArtButton } from '../ArtButton';
import { Text } from '../Text';

import styles from './style.module.scss';

interface ModalProps {
  backgroundUrl:  string;
  titleUrl: string;
  onClickClose: () => void;
  onClickNext: () => void;
  title: string;
  content: ReactNode;
  scrollContent: ReactNode;
  isNext: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  backgroundUrl,
  titleUrl,
  onClickClose,
  onClickNext,
  title,
  content,
  scrollContent,
  isNext,
}) => {
	
	useEffect(() => {
		document.body.classList.add('bodyOverflow');

		return () => {
			document.body.classList.remove('bodyOverflow');
		}
	}, []);

  	return (
		<div
			className={styles.modal}
			style={{
				backgroundImage:`url(${backgroundUrl})`,
			}}
		>
			<div className={styles.modalContainer}>
				<header className={styles.modalHeader}>
					<ArtButton
						onClick={onClickClose}
						type="Transparent"
						className={styles.modalButton}
					>
						Close
					</ArtButton>
					{isNext && (
						<ArtButton
							onClick={onClickNext}
							type="White"
							className={styles.modalButton}
						>
							<span>Next</span>
							<svg
								width="26"
								height="12"
								viewBox="0 0 26 12"
								fill="none"
								className={styles.modalArrow}
							>
								<path
									d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</ArtButton>
					)}
				</header>
				<h2
					style={{
						backgroundImage: `url(${titleUrl})`,
					}}
					className={styles.modalTitle}
				>{title}</h2>
				<Text
					className={styles.modalText}
				>{content}</Text>
				<div className={styles.modalContent}>
					{scrollContent}
				</div>
			</div>
		</div>
  	);
}