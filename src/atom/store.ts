import {ItemProps} from '@shared/types/itemTypes';
import {atom} from 'jotai';
export const cartQuantity = atom<number>(0);
export const cartItems = atom<ItemProps[]>([]);

export const cartTotalQuantity = atom(get => {
  const items = get(cartItems);
  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );
  return totalQuantity;
});
