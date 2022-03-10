import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([]);
	const [basket, setBasket] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((data) => data.json())
			.then((res) => {
				setData(res.products);
			});
	}, []);

	// useEffect(() => {
	// 	console.log(basket);
	// }, [basket]);

	const onBasket = (newItem) => {
		const index = basket.findIndex((el) => el.id === newItem.id);
		
		setBasket((prev) => {
			if (index >= 0) {
				const newItem = { ...prev[index], count: prev[index].count + 1 };
				const newBasket = [...prev];
				newBasket[index] = newItem;
				return newBasket;
			} else {
				return [...prev, newItem];
			}
		});
	};

	const deleteItem = (id) => {
	
		setBasket((prev) => prev.filter((elem) => elem.id !== id));
	};

	const countItemPlus = (id) => {
		setBasket((prev) =>
			prev.map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el))
		);
	};

	const countItemMinus = (id) => {
		setBasket((prev) =>
			prev.map((el) =>
				el.id === id && el.count > 0 ? { ...el, count: el.count - 1 } : el
			)
		);
	};

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const clearAllItems = () => {
		setBasket([]);
	};
	return (
		<div>
			<Header basket={basket} openModal={toggleModal} />
			<Cards data={data} onBasket={onBasket} />
			{isModalOpen && (
				<Modal
					toggleModal={toggleModal}
					basket={basket}
					countItemPlus={countItemPlus}
					countItemMinus={countItemMinus}
					deleteItem={deleteItem}
					clearAllItems={clearAllItems}
				/>
			)}
		</div>
	);
}

export default App;
