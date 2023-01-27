import React from 'react';
import {IItem} from "../../data";
import {StarIcon, ShoppingBagIcon} from '@heroicons/react/24/solid'
import {useAppDispatch} from "../../app/store";
import {setAddItemToCart, setOpenCart} from "../../app/CartSlice";
import {amountAddZero} from "../../data/helpers";

interface IProps extends IItem{
	ifExists?: boolean| undefined
}
const Item = ({id,title, img, btn, price, rating, text, shadow, color,ifExists}: IProps) => {

	const dispatch = useAppDispatch()
	const onAddToCart = () =>{
		const item = {id, title, text, img, color, shadow, price};
		dispatch(setAddItemToCart(item))
	}
	const onByItem = () =>{
		onAddToCart()
		dispatch(setOpenCart({cartState:true}))
	}
	return (
		<div className={`relative bg-gradient-to-b ${shadow} ${color} grid  items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${ifExists?'justify-items-start':'justify-items-center'}`}>
			<div className={`grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'}`}>
				<h3 className={'text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'}>{title}</h3>
				<p className={'text-slate-200 filter drop-shadow text-base md: text-sm font-normal'}>{text}</p>
				<div className={'flex items-center justify-between w-28 my-2'}>
					<div className={'flex items-center bg-white/80 px-1 rounded blur-effect-theme'}>
						<h3 className={'text-black text-sm font-medium '}>${amountAddZero(parseInt(price))}</h3>
					</div>
					<div className={'flex items-center gap-1'}>
						<StarIcon className={'icon-style w-5 h-5 md:w-4 md:h-4'}/>
						<h3 className={'md:text-sm font-normal text-slate-100'}>{rating}</h3>
					</div>
				</div>
				<div className={'flex items-center gap-3'}>
					<button
						className={'bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200'}
						type={'button'}
						onClick={onAddToCart}
					>
						<ShoppingBagIcon className={'icon-style text-slate-900'}/>
					</button>
					<button
						onClick={onByItem}
						className={'bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200 text-sm text-black px-2 py-1'}
						type={'button'}>
						{btn}
					</button>
				</div>
			</div>
			<div className={`flex items-center ${ifExists ? 'absolute top-5 right-1 ' : 'justify-center'}`}>
				<img
					className={` transitions-theme hover:-rotate-12 ${ifExists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'}`}
						 src={img}
						 alt={title}/>
			</div>
		</div>
	);
};

export default Item;
