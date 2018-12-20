const add = string => {
  const separator = ",";

  if (string.length === 0) {
    return 0;
  }

  const list = string.split(separator);

  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += parseInt(list[i]);
  }
  return sum;
};

module.exports = add;
