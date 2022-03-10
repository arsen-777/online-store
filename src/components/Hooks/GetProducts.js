import React, { useState } from "react";
import cardsStyle from "../Cards/Cards.module.css";
import plus from "../../asets/images/plus.svg";
import minus from "../../asets/images/minus.svg";
import cart from "../../asets/images/cart.svg";
export default function GetProducts({
	id,
	title,
	price,
	images,
	brand,
	onBasket,
}) {
	const [count, setCount] = useState(1);

	return (
		<div className={cardsStyle.cards_block}>
			<div className={cardsStyle.option_syle}>
				<div className={cardsStyle.items_style_block}>
					<h1>{brand}</h1>
					<p>{title}</p>
					<img src={images[0]} alt=""></img>
					<h2>{price}</h2>
				</div>
				<div className={cardsStyle.btn_block}>
					<img
						className={cardsStyle.btn_style}
						src={plus}
						alt=""
						onClick={() => setCount((prev) => prev + 1)}
					/>
					<p>{count}</p>
					<img
						className={cardsStyle.btn_style}
						src={minus}
						alt=""
						onClick={() => setCount((prev) => (prev === 0 ? prev : prev - 1))}
					/>
				</div>
				<img
					src={cart}
					alt=""
					onClick={() => {
						if (count > 0) {
							onBasket({ id, title, price, images, brand, count });
							setCount(1);
						}
					}}
					className={cardsStyle.add_style}
				/>{" "}
			</div>
		</div>
	);
}
