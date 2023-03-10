import React from 'react';
import {ChevronDoubleLeftIcon, XMarkIcon} from '@heroicons/react/24/solid'
import {useAppDispatch} from "../../app/store";
import {setClearCartItems} from "../../app/CartSlice";

interface IProps {
	onCartToggle: () =>void
	cartTotalQTY:number
}
const CartCount = ({onCartToggle,cartTotalQTY}:IProps) => {
	const dispatch = useAppDispatch()
	const onClearCartItems = () =>{
		dispatch(setClearCartItems())
	}
	return (
		<div className={'bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'}>
			<div className={'flex items-center gap-3'}>
				<div className={'grid items-center cursor-pointer'} onClick={onCartToggle}>
					<ChevronDoubleLeftIcon
						className={'w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]'}
						/>
				</div>
				<div className={'grid items-center'}>
					<h3 className={'text-base font-medium text-slate-900'}>
						Your Cart <span className={'bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs'}>( {cartTotalQTY} Items)</span>
					</h3>
				</div>
			</div>
			<div className={'flex items-center'}>
				<button
					className={'rounded bg-theme-cart active:scale-90 p-0.5'}
					type={'button'}
					onClick={onClearCartItems}
				>
					<XMarkIcon
						className={'w-5 h-5 text-white stroke-[2]'}
						/>
				</button>
			</div>
		</div>
	);
};

export default CartCount;
