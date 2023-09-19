import Image from "next/image";
import styles from "./HeroCard.module.scss";

interface Props {
	imageUrl: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
}

export const HeroCard = ({ imageUrl, imageAlt, imageWidth, imageHeight }: Props) => {
	return (
		<div className={styles.heroCard}>
			<Image src={imageUrl} alt={imageAlt} width={imageWidth} height={imageHeight}/>
			<div className={styles.heroCardContent}>
				NEW IN
				<span>BROWSE ALL</span>
			</div>
			<div className={styles.heroCardMenu}>
				<ul>
					<li>Trainers</li>
					<li>Sandals</li>
					<li>Heel shoes</li>
					<li>Flat shoes</li>
					<li>Special prices</li>
				</ul>
			</div>
		</div>
	);
};