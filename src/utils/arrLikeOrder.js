export default function arrLikeOrder(arr, curValue, type="checkbox") {
  if(type === 'radio') {
    return arr.map(
      ({key, title, value}) => ({key, title, value, checked: curValue === value})
    );
  }
  return arr.map(
    ({key, title, value}) => ({key, title, value, checked: curValue.includes(value)})
  );
}