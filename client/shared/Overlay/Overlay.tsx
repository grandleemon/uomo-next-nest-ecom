"use client";

import { ReactNode } from "react";
import styles from "./Overlay.module.scss";

interface Props {
	children: ReactNode;
	onClose: VoidFunction;
}

export const Overlay = ({ children, onClose }: Props) => (
	<>
		<div className={styles.modalOverlay} onClick={onClose}>
		</div>
		<div className={styles.modalContent}>
			{children}
		</div>
	</>
);