export const useGetDataByCategory = (data, category) => {
  const filteredProducts = data.filter(
		data => data.shere === category
	)
  return filteredProducts
}

export const useGetDataByYear = (data) => {
	const filteredProducts = data.sort((a, b) => a.year - b.year)
	return filteredProducts
}

export const getInventionById = (data, id) => {
	return data.find(invention => invention.id === Number(id))
}
