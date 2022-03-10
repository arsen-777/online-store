import KukuStyle from "./Modal.module.css";
import closeBtn from "../../asets/images/close.svg";

import React, { useRef } from "react";
import ByItem from "../ByItem/ByItem";
import ModalFooter from "../ModalFooter/ModalFooter";

export default function Modal({
	basket,
	toggleModal,
	countItemPlus,
	countItemMinus,
	deleteItem,
	clearAllItems,
}) {
	const childRef = useRef();
	// console.log(childRef);

	return (
		<div
			className={KukuStyle.modal_block}
			onClick={(evt) => {
				if (
					evt.target !== childRef.current &&
					!childRef.current.contains(evt.target)
				)
					toggleModal();
			}}
		>
			<div ref={childRef} className={KukuStyle.child_modal}>
				<div onClick={toggleModal} className={KukuStyle.close_all}>
					<div className={KukuStyle.my_card}>My Card</div>
					<div>
						<img src={closeBtn} alt="" />
					</div>
				</div>
				{basket.length > 0 &&
					basket.map((el) => {
						return (
							<ByItem
								key={el.id}
								price={el.price}
								title={el.title}
								images={el.images}
								count={el.count}
								countItemPlus={countItemPlus}
								countItemMinus={countItemMinus}
								deleteItem={deleteItem}
								id={el.id}
							/>
						);
					})}
				<ModalFooter basket={basket} clearAllItems={clearAllItems} />
			</div>
		</div>
	);
}
