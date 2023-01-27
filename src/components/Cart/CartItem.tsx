import React from 'react';
import {MinusIcon, PlusIcon, TrashIcon} from '@heroicons/react/24/outline';
import {IItem} from "../../data";
import {useAppDispatch} from "../../app/store";
import {setDecreaseItemQTY, setIncreaseItemQTY, setRemoveCartFromCart} from "../../app/CartSlice";
import {amountAddZero} from "../../data/helpers";

interface IProps {
	item: IItem
}

const CartItem = ({item: {cartQuantity, shadow, color, img, price, id, title, text}}: IProps) => {
	const item = {cartQuantity, shadow, color, img, price, id, title, text}
	const dispatch = useAppDispatch()
	const onRemoveItem = () => {
		dispatch(setRemoveCartFromCart(item))
	}
	const onIncreaseIteQTY = () => {
		dispatch(setIncreaseItemQTY(item))
	}
	const onDecreaseIteQTY = () => {
		dispatch(setDecreaseItemQTY(item))
	}
	return (
		<div className={'flex item-center justify-between w-full px-5'}>
			<div className={'flex items-center gap-5'}>
				<div
					className={`bg-gradient-to-b  ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-300 ease-in-out grid item-center`}>
					<img className={'w-36 h-auto object-fill lg:w-28'} src={img} alt={title}/>
					<div className={'absolute right-1 top-2.5 blur-effect-theme bg-white/80 text-black text-xs p-1 rounded '}>
						${amountAddZero(parseInt(price))}
					</div>
				</div>
				<div className={'grid items-center gap-4 '}>
					<div className={'grid item-center leading-none'}>
						<h3 className={'font-medium text-lg text-slate-900 lg:text-sm'}>{title}</h3>
						<p className={'text-sm text-slate-800 lg:text-xs'}>{text}</p>
					</div>
					<div className={'flex items-center justify-between w-[12vw]'}>
						<button
							type={'button'}
							onClick={onDecreaseIteQTY}
							className={'bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'}>
							<MinusIcon className={'w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]'}/>
						</button>
						<div
							className={'bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-7 lg:w-6 lg:h-7 flex items-center justify-center'}>{cartQuantity}</div>
						<button
							type={'button'}
							onClick={onIncreaseIteQTY}
							className={'bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'}>
							<PlusIcon className={'w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]'}/>
						</button>
					</div>
				</div>
			</div>
			<div className={'grid items-center gap-5'}>
				<div className={'grid items-center justify-items-center'}>
					<h3
						className={'text-lg lg:text-base text-slate-900  font-medium'}>${cartQuantity &&  amountAddZero( parseInt(price) * cartQuantity)}</h3>
				</div>
				<div>
					<button
						className={'bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 text-white p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer'}
						type={'button'}
						onClick={onRemoveItem}>
						<TrashIcon className={'w-5 h-5'}/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
