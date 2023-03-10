import React from 'react';
import {ArrowLeftIcon} from '@heroicons/react/24/solid'
import emptyBag from '../../assets/emptybag.png'

interface IPops {
	onCartToggle: () => void
}
const CartEmpty = ({onCartToggle}:IPops) => {
	return (
		<div className={'flex items-center justify-center flex-col h-screen px-11 text-center gap-7'}>
			<img
				className={'w-40 lg:36 sm:28 h-auto object-fill transition-all duration-300 hover:scale-110'}
				src={emptyBag}
				alt="emptyBag/img"/>
			<button
				className={'button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'}
				onClick={onCartToggle}
				type={'button'}
			>
				<ArrowLeftIcon
					className={'w-5 h-5 text-slate-900'}
					/>
				<span className={''}>Back To Nike Store</span>
			</button>
		</div>
	);
};

export default CartEmpty;
