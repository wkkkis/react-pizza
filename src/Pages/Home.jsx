import React, {useCallback} from "react";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/reducers/filters";
import {getPizzas} from "../redux/reducers/pizzas";

const categoriesNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
    {name: "популярности", type: "rating", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}]

export default function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(getPizzas(category, sortBy))
    }, [category, sortBy])

    let onClickItem = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    let onSelectSortType = useCallback(index => {
        dispatch(setSortBy(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickCategory={onClickItem}
                            items={categoriesNames}/>
                <SortPopup activeSortType={sortBy.type}
                           onClickSortType={onSelectSortType}
                           items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ?
                    items.map(obj => (<PizzaBlock key={obj.id} {...obj}/>))
                    : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}