export const menuData = [
	{
		title: "HOME",
		link: "/"
	},
	{
		title: "SHOP",
		link: "/shop"
	},
	{
		title: "COLLECTION",
		link: "/collection"
	},
	{
		title: "JOURNAL",
		link: "/journal"
	},
	{
		title: "LOOKBOOK",
		link: "/lookbook"
	},
	{
		title: "PAGES",
		link: "/pages"
	},
]

export const userActionsData = [
	{
		path: "icons/search.svg",
		alt: "search",
	},
	{
		path: "icons/user.svg",
		alt: "user",
	},
	{
		path: "icons/heart.svg",
		alt: "heart",
	},
	{
		path: "icons/shopping-bag.svg",
		alt: "shopping-bag",
	},
] as const;

export type KeyToOpenModal = typeof userActionsData[number]["alt"];

