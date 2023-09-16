import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from "@/shared/wrapper";
import { UserActionsList } from "./UserActionsList";
import { MenuList } from "./MenuList";
import styles from "./Header.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.headerWrapper}>
					<Image className={styles.mobileBurgerMenu}
								 src="icons/burger-menu.svg"
								 alt="mobile burger menu"
								 width={25}
								 height={18}
					/>
					<Link href="/">
						<Image src="logo.svg" alt="logo" width={112} height={27}/>
					</Link>
					<MenuList/>
					<UserActionsList/>
					<Image className={styles.mobileShoppingBag}
								 src="icons/shopping-bag.svg"
								 alt="mobile shopping bag"
								 width={20}
								 height={10}
					/>
				</div>
			</Wrapper>
		</header>
	);
};
