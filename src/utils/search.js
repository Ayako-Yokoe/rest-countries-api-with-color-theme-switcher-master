export const handleSearch = (data, query) => {
  if (!query) return data;

  query = query.toLowerCase();
  return data.filter(d => 
    d.name.split(' ').some(word => 
      word.toLowerCase().startsWith(query)
    )
  )
}
