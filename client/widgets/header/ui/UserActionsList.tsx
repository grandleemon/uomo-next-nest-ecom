import React from 'react';
import { userActionsData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export const UserActionsList = () => (
	<ul className={styles.userActionsList}>
		{userActionsData.map(({ path, alt, params }) => (
			<Link key={alt} href={params} replace>
				<Image key={alt} src={path} alt={alt} height={20} width={20}/>
			</Link>
		))}
		<Image src="icons/burger-menu.svg" alt="burger menu" width={25} height={18}/>
	</ul>
);

