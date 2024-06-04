import Header from "../components/Header";
import Slice from "../components/Slice";

const photos = import.meta.glob("../assets/artwork/*.jpg", {
  eager: true,
  query: "url",
  import: "default",
});

const Artwork = () => {
  return (
    <>
      <Header title="Artwork" focussed />
      <Slice bgColor="bg-white">
        <div className="mt-6 sm:columns-2 md:columns-3 sm:gap-1">
          {Object.keys(photos).map((key) => (
            <img
              key={key}
              className="w-full "
              src={photos[key] as string}
              aria-hidden
            />
          ))}
        </div>
      </Slice>
    </>
  );
};

export default Artwork;
