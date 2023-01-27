import React, {MouseEventHandler, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../app/store";
import {setCloseCart, setGetTotals} from "../../app/CartSlice";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmty";
import CartItem from "./CartItem";
import {amountAddZero} from "../../data/helpers";


const Cart = () => {
	const {cartState, cartItems, cartTotalAmount, cartTotalQuantity} = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	const onCartToggle = () => {
		dispatch(setCloseCart({
			cartState: false
		}))
	}

	useEffect(() => {
		dispatch(setGetTotals(cartItems));
	}, [cartItems, dispatch]);


	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0  w-full h-screen opacity-100 z-[250] transition-all duration-500 ${cartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`} >
			<div className={'w-full blur-effect-theme fixed top-0 bottom-0 left-0 right-0 '} onClick={onCartToggle}></div>
			<div className={`blur-effect-theme-deep h-screen max-w-xl w-full fixed right-0 z-[250] transition-all duration-500 ${cartState ? 'right-0' : '-right-1/4'}`}>
				<CartCount onCartToggle={onCartToggle} cartTotalQTY={cartTotalQuantity}/>
				{cartItems.length === 0
					? <CartEmpty onCartToggle={onCartToggle}/>
					: <div>
						<div className={'flex items-start justify-start flex-col gap-y-7 lg: gap-y-5 overflow-y-scroll h-[75vh] scroll-smooth scroll-hidden py-3'}>
							{cartItems.map((item,i) =>{
								return <CartItem key={i} item={item}/>
							})}
						</div>
					</div>
				}
				<div className={'fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'}>
					<div className={'flex items-center justify-between'}>
						<h3 className={'text-base font-semibold uppercase'}>SubTotal</h3>
						<h3 className={'text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5 '}>${amountAddZero(cartTotalAmount)}</h3>
					</div>
					<div className={'grid items-center gap-2'}>
						<p className={'text-sm font-medium text-center '}>Taxes and Shipping Will Calculate At shipping</p>
						<button className={'button-theme bg-theme-cart text-white'} type={'button'}>Check out</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Cart;
