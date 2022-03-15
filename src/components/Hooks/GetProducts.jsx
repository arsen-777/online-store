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
	countItemPlus,
	countItemMinus,
	basket,
}) {
	const [count, setCount] = useState(1);
	const [isAdd, setIsAdd] = useState(false);

	const addCount = () => {
		countItemPlus(id);
	};
	const minusCount = () => {
		countItemMinus(id);
	};

	return (
		<div className={cardsStyle.cards_block}>
			<div className={cardsStyle.option_syle}>
				<div className={cardsStyle.items_style_block}>
					<h1>{brand}</h1>
					<p>{title}</p>
					<img src={images[0]} alt=""></img>
					<h2>{price}</h2>
				</div>
				{isAdd && (
					<div className={cardsStyle.btn_block}>
						<img
							className={cardsStyle.btn_style}
							src={plus}
							alt=""
							onClick={addCount}
						/>
						<p>{basket.find((item) => item.id === id)?.count || 0}</p>
						<img
							className={cardsStyle.btn_style}
							src={minus}
							alt=""
							onClick={minusCount}
						/>
					</div>
				)}
				{!isAdd && (
					<img
						src={cart}
						alt=""
						onClick={() => {
							setIsAdd(true);
							if (count > 0) {
								onBasket({ id, title, price, images, brand, count });
								setCount(1);
							}
						}}
						className={cardsStyle.add_style}
					/>
				)}
			</div>
		</div>
	);
}
