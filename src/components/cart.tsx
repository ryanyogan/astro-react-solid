import { useStore } from '@nanostores/solid';
import { Show, createSignal } from 'solid-js';
import { $cart as cart, subTotal } from '../stores/cart';
import styles from './cart.module.css';

function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'usd',
	}).format(amount);
}

const EmptyState = () => {
	return (
		<>
			<p class={styles.icon}>
				<span role="img" aria-label="hot dog">
					🌭
				</span>
			</p>

			<p class={styles.empty}>Your cart is empty, add some sandwhiches.</p>
		</>
	);
};

const CheckoutNotice = () => {
	return <p class={styles.notice}>Checkout is not implemented yet.</p>;
};

export function Cart() {
	const [showNotice, setShowNotice] = createSignal(false);
	const $subTotal = useStore(subTotal);
	const $cart = useStore(cart);

	return (
		<aside class={styles.cart}>
			<h2>Your Cart</h2>

			<Show
				when={Object.values($cart()).length > 0}
				fallback={<EmptyState />}
			></Show>
		</aside>
	);
}
