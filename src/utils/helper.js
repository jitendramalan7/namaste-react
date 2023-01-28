export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

export function isOnline(onlineOrOffline, onlineFlag) {
  window.addEventListener(onlineOrOffline, () => {
    setIsOnline(onlineFlag);
  });
}
