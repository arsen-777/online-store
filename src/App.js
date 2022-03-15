import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
	let newLocalStorage = localStorage.getItem("obj");

	if (newLocalStorage) {
		return JSON.parse(localStorage.getItem("obj"));
	} else {
		return [];
	}
};

function App() {
	const [data, setData] = useState([]);
	const [basket, setBasket] = useState(getLocalStorage());
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add("overflow_hidden");
		} else {
			document.body.classList.remove("overflow_hidden");
		}
	}, [isModalOpen]);

	useEffect(() => {
		localStorage.setItem("obj", JSON.stringify(basket));
	}, [basket]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((data) => data.json())
			.then((res) => {
				setData(res.products);
			});
	}, []);
	const onBasket = (newItem) => {
		const index = basket.findIndex((el) => el.id === newItem.id);

		setBasket((prev) => {
			if (index >= 0) {
				const newObject = {
					...prev[index],
					count: prev[index].count + newItem.count,
				};
				const newBasket = [...prev];
				newBasket[index] = newObject;
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
			<Cards
				data={data}
				onBasket={onBasket}
				countItemPlus={countItemPlus}
				countItemMinus={countItemMinus}
				count={basket.count}
				basket={basket}
			/>
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
