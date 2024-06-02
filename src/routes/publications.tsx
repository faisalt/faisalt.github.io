import Header from "../components/Header";
import Slice from "../components/Slice";
import { publicationsData } from "../copy";

const Publications = () => {
  return (
    <>
      <Header title="Publications" focussed />
      <Slice bgColor="bg-white">
        <h2 className="mt-6 text-2xl text-slate-900">Publication list</h2>
        <ul className="mt-6">
          {publicationsData.map((publication) => (
            <li className="mt-4">
              <p className="text-blue-950">
                {publication.citation}&nbsp;
                <a
                  href={publication.url}
                  className="text-blue-700 hover:underline hover:text-blue-900"
                >
                  {publication.title}
                </a>
                .
              </p>
            </li>
          ))}
        </ul>
      </Slice>
    </>
  );
};

export default Publications;
