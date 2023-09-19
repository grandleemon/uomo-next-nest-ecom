import { HeroCard } from "@/shared/HeroCard/HeroCard";
import { heroSectionData } from "@/data/home";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<main className="">
			<section className={styles.heroSection}>
				{heroSectionData.map(({ imageWidth, imageHeight, imageUrl, imageAlt }) => (
					<HeroCard
						key={imageAlt}
						imageUrl={imageUrl}
						imageAlt={imageAlt}
						imageHeight={imageHeight}
						imageWidth={imageWidth}
					/>
				))}
			</section>
		</main>
	);
}