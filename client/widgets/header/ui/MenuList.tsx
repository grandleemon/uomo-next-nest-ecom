import { menuData } from "@/data/data";
import Link from "next/link";
import styles from "./Header.module.scss";

export const MenuList = () => (
	<ul className={styles.menuList}>
		{menuData.map(({ link, title }) => (
			<li key={title}>
				<Link href={link}>{title}</Link>
			</li>
		))}
	</ul>
);
