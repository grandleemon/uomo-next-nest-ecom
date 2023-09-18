"use client";

import { createPortal } from "react-dom";
import { ReactNode } from "react";

let root: HTMLElement | null;

const getRootPortal = () => {
	if (root) return root;

	root = document.getElementById("root-portal");

	if (!root) throw new Error("root portal element not found");

	return root;
}

interface Props {
	children: ReactNode;
}

export const Portal = ({ children }: Props) => createPortal(children, getRootPortal())