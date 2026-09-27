import LibraryDataCard from "./libraryDataCard";

const fetchDataFromAPI = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const LibrarySection = async () => {
  const allData = await fetchDataFromAPI();

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-3xl tracking-[-2px]">THE LIBRARY</h2>
      <p className="text-[18px] my-2 text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allData.map((data: IData) => (
          <LibraryDataCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default LibrarySection;
