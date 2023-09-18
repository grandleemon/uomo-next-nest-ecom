"use client";

import { useState } from 'react';
import { KeyToOpenModal, userActionsData } from "@/data/data";
import Image from "next/image";
import styles from "./Header.module.scss";
import { Portal } from "@/shared/Portal/Portal";
import { Overlay } from "@/shared/Overlay/Overlay";

export const UserActionsList = () => {
	const [actionClicked, setActionClicked] = useState<KeyToOpenModal | null>(null)

	const handleChoose = (alt: KeyToOpenModal) => {
		setActionClicked(alt)
	}

	const renderModal = () => {
		switch (actionClicked) {
			case "user": {
				return <Portal>
					<Overlay onClose={() => setActionClicked(null)}>
						<div>
							user
						</div>
					</Overlay>
				</Portal>
			}
			case "search": {
				return <Portal>
					<Overlay onClose={() => setActionClicked(null)}>
						<div>
							search
						</div>
					</Overlay>
				</Portal>
			}
			case "heart": {
				return <Portal>
					<Overlay onClose={() => setActionClicked(null)}>
						<div>
							heart
						</div>
					</Overlay>
				</Portal>
			}
			case "shopping-bag": {
				return <Portal>
					<Overlay onClose={() => setActionClicked(null)}>
						<div>
							shopping-bag
						</div>
					</Overlay>
				</Portal>
			}
		}
	}

	return <ul className={styles.userActionsList}>
		{userActionsData.map(({ path, alt }) => (
			<Image key={alt} src={path} alt={alt} height={20} width={20} onClick={() => handleChoose(alt)}/>
		))}
		<Image src="icons/burger-menu.svg" alt="burger menu" width={25} height={18}/>
		{actionClicked && renderModal()}
	</ul>
}
