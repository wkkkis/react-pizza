import React, {useState} from "react";

const Categories = React.memo(function Categories({items, onClickItem}) {

    const [active, onActive] = useState(null)

    let onSelectItem = index => {
        onActive(index)
        onClickItem(index)
    }

    console.log("RERENDER")

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)} className={active === null ? "active" : ""}>Все</li>
                {items &&
                items.map((item, index) => (
                    <li onClick={() => onSelectItem(index)}
                        className={active === index ? "active" : ""}
                        key={`${item}_${index}`}>
                        {item}
                    </li>
                ))
                }
            </ul>
        </div>
    )
})
export default Categories