import React, {useEffect, useState} from 'react'
import {MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setGetTotals, setOpenCart} from "../../app/CartSlice";
import {useSelector} from "react-redux";

const Navbar = () => {
	const [navState, setNavState] = useState(false);
	const dispatch = useAppDispatch()
	const {cartTotalQuantity} = useAppSelector(state => state.cart)
	const onCartToggle = () => {
		dispatch(setOpenCart({
			cartState: true
		}))
	}
	const onNavScroll = () => {
		if (window.scrollY > 30) {
			setNavState(true)
		} else {
			setNavState(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onNavScroll)
		return () => {
			window.removeEventListener('scroll', onNavScroll)
		}
	}, []);


	return (
		<header className={
			!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
		}>
			<nav className={'flex items-center justify-between nike-container'}>
				<div className={'flex items-center'}>
					<img
						className={`${navState && 'filter brightness-0'} w-16 h-auto`}
						src={logo}
						alt="logo"/>
				</div>
				<ul className={'flex items-center justify-center gap-2'}>
					<li className={'grid item-center '}>
						<MagnifyingGlassIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
					</li>
					<li className={'grid item-center '}>
						<HeartIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
					</li>
					<li className={'grid item-center '}>
						<button className={'border-none outline-none active:scale-110 transition-all duration-300 relative'}
										type={'button'} onClick={onCartToggle}>
							<ShoppingBagIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
							<div className={`absolute top-3.5 right-0  shadow w-4 h-4 text-[0.65rem] leading-4
							 font-medium rounded-full flex item-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{cartTotalQuantity}
							</div>
						</button>

					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
