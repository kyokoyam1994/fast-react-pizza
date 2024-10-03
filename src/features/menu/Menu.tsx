import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { Pizza } from "../../models/Pizza";
import MenuItem from "./MenuItem";

export function Menu() {
  const menu = useLoaderData() as Pizza[];
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id}></MenuItem>
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
