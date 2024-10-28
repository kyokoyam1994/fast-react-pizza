import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

interface DeleteItemProps {
  pizzaId: string;
}

export default function DeleteItem({ pizzaId }: DeleteItemProps) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
}
