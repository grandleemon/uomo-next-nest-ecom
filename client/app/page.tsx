import styles from "./Home.module.scss";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<section className={styles.heroSection}>
				<div>
					<Image src="/images/hero1.jpg" alt="hero1" width={900} height={910}/>
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
				<div>
					<Image src="/images/hero2.jpg" alt="hero1" width={900} height={910}/>
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
				<div>
					<Image src="/images/hero3.jpg" alt="hero1" width={900} height={910}/>
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
				<div>
					<Image src="/images/hero4.jpg" alt="hero1" width={900} height={910}/>
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
			</section>
		</main>
	)
}
