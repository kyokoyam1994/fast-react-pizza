import { Pizza } from "../../models/Pizza";
import { formatCurrency } from "../../utils/helpers";

interface MenuItemProps {
  pizza: Pizza;
}

function MenuItem({ pizza }: MenuItemProps) {
  console.log(pizza);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
