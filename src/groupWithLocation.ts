const groupWithLocation = (category: string) => (data: any[]) => {
  return data.reduce((acc, current) => {
    if (current[category] && current.location) {
      acc.push({
        location: current.location,
        [category]: current[category],
      });
    }
    return acc;
  }, []);
};

export default groupWithLocation;
