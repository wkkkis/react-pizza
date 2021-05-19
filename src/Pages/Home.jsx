import React, {useCallback} from "react";
import {Categories, PizzaBlock, SortPopup} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/reducers/filters";


const categoriesNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
    {name:"популярности", type: "popular"},
    {name: "цене", type: "price"},
    {name:"алфавиту", type: "alphabet"}]

export default function Home(){
    const dispatch = useDispatch();
    const items = useSelector(({pizzasReducer}) => pizzasReducer.items)

    let onClickItem = useCallback((index) => {
        dispatch(setCategory(index))
        console.log(index)
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onClickItem}
                    items={categoriesNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(obj => (
                    <PizzaBlock key={obj.id} {...obj}/>
                ))}
            </div>
        </div>
    )
}