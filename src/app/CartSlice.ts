import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import toast from 'react-hot-toast'
import {IItem} from "../data"

interface IStoreState {
	cartState: boolean
	cartItems: IItem[]
	cartTotalAmount: number
	cartTotalQuantity:number
}



const initialState: IStoreState = {
	cartState: false,
	cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [],
	cartTotalAmount:0,
	cartTotalQuantity:0,
}

const CartSlice = createSlice({
	initialState,
	name: 'cart',
	reducers: {
		setAddItemToCart: (state, action: PayloadAction<IItem>) => {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity! += 1
				toast.success('Item QTY Increased')
			} else {
				const temp = {...action.payload, cartQuantity: 1}
				state.cartItems.push(temp)

				toast.success(`${action.payload.title} added to Cart`)
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems))
		},
		setClearCartItems: (state) => {
			state.cartItems = []
			toast.success(` Cart Cleared`)
			localStorage.setItem('cart', JSON.stringify(state.cartItems))
		},
		setCloseCart: (state, action: PayloadAction<{ cartState: boolean }>) => {
			state.cartState = action.payload.cartState
		},
		setDecreaseItemQTY: (state, action: PayloadAction<IItem>) => {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
			if (state.cartItems[itemIndex].cartQuantity! > 1) {
				state.cartItems[itemIndex].cartQuantity! -= 1
				toast.success(`Item QYT Decreased`)
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems))
		},
		setGetTotals: (state, action) => {
			let {totalAmount, totalQTY} = state.cartItems.reduce((cartTotal:any, cartItem) => {
				const {price, cartQuantity} = cartItem
				const totalPrice = parseInt(price) * cartQuantity!

				cartTotal.totalAmount += totalPrice
				cartTotal.totalQTY += cartQuantity!

				return cartTotal
			}, {
				totalAmount: 0 ,
				totalQTY: 0
			})
			state.cartTotalAmount = totalAmount
			state.cartTotalQuantity = totalQTY
		},

		setIncreaseItemQTY: (state, action: PayloadAction<IItem>) => {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity! += 1
				toast.success(`Item QYT Increased`)
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems))
		},
		setOpenCart: (state, action: PayloadAction<{ cartState: boolean }>) => {
			state.cartState = action.payload.cartState
		},
		setRemoveCartFromCart: (state, action: PayloadAction<IItem>) => {
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
			localStorage.setItem('cart', JSON.stringify(state.cartItems))
			toast.success(`${action.payload.title} Removed From Cart`)
		}
	}
})

export const {
	setOpenCart,
	setCloseCart,
	setAddItemToCart,
	setRemoveCartFromCart,
	setIncreaseItemQTY,
	setDecreaseItemQTY,
	setClearCartItems,
	setGetTotals
} = CartSlice.actions

export default CartSlice.reducer