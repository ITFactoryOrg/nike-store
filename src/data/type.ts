import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";
import product7 from "../assets/product7.png";

export interface IVideo {
	imgSrc: string;
	clip: string;
}

export interface IHeroApiType {
	title: string;
	subtitle: string;
	img: string;
	btnText: string;
	videos: IVideo[];
	socialLinks: { icon: string }[]
}


export interface ISneakersType {
	heading: string
	title: string
	text: string
	btn: string
	url: string
	img: string
}

export interface IItem {
	id: string
	title: string
	text: string
	rating?: string
	btn?: string
	img: string
	price: string
	color: string
	shadow: string,
	cartQuantity?: number | undefined
}

export interface IItemsType {
	title : string
	items: IItem[]
}

export interface INews {
	title: string
	text: string
	img: string
	url: string
	like: string
	time: string
	by: string
	btn: string
}

export interface INewsItems {
	title: string
	news: INews[]
}

export interface ITitle {
	title:string
}

export interface ILink {
	link:string
}

export interface IFooterAPIType {
	titles: ITitle[]
	links:Array<ILink[]>
}