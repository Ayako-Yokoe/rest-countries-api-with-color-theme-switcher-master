export const handleFilter = (data, region) => {
  if (region === 'Filter by Region') return data;

  region = region === 'America' ? 'Americas' : region;
  return data.filter(d => d.region === region);
}