export const getDisplayBillValue = (value: string) => {
  if (isNaN(+value) || value === "") {
    return value;
  }
  return `$${value}`;
};

export const getTotalBill = (values: string[]) => {
  const convertedValues = values
    .filter((value) => {
      return isNaN(+value) ? false : true;
    })
    .map((value) => +value);

  return convertedValues.reduce(
    (total: number, current: number) => total + +current,
    0
  );
};

export const getClassName = (baseClass: string, modifier: string) => {
  if (modifier !== "") {
    return `${baseClass}--${modifier}`;
  }
  return "";
};

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
