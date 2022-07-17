const shipFactory = (length) => {
  let ship = new Array(length);
  for(let i = 0; i < length; i++) {
    ship[i] = false;
  };

  const hit = (location) => {
    ship[location] = true;
    return ship;
  };

  const isSunk = () => {
    for(let i = 0; i < length; i++) {
      if (ship[i] == false) {
        return false;
      };
    };
    return true;
  };

  return { hit, isSunk };
}

module.exports.shipFactory = shipFactory;