import { shipFactory } from "../ships";

test('hit returns array of hits if ship has been hit', () => {
  const four_ship = shipFactory(4);
  expect(four_ship.hit(2)).toEqual([false, false, true, false]);
});

test('isSunk returns false if a ship is not sunk yet', () => {
  const four_ship = shipFactory(4);
  four_ship.hit(1);
  expect(four_ship.isSunk()).toBe(false);
});

test('isSunk returns true if a ship is sunk yet', () => {
  const two_ship = shipFactory(2);
  two_ship.hit(0);
  two_ship.hit(1);
  expect(two_ship.isSunk()).toBe(true);
});