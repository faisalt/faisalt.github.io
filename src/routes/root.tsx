import "../App.css";
import Header from "../components/Header";
import Slice from "../components/Slice";

const categoryList = [
  {
    name: "Projects",
    url: "/projects",
    description: "Professional and personal projects ",
    icon: "fa-lightbulb-o",
  },
  {
    name: "Publications",
    description:
      "Conference, Journals, and Book Chapters from my Academic years",
    icon: "fa-book",
  },
  {
    name: "Media",
    description: "I have been on the BBC!",
    icon: "fa-television",
  },
  { name: "Photos", description: "I enjoy photography", icon: "fa-camera" },
  {
    name: "Artwork",
    description: "Some sketches I've done",
    icon: "fa-pencil-square-o",
  },
  {
    name: "Comics",
    description: "Comics I've drawn, mainly involving worms",
    icon: "fa-pencil-square-o",
  },
];

const Root = () => {
  return (
    <>
      <Header title="Faisal Taher" />
      <main>
        <Slice bgColor="bg-emerald-950">
          <h2 className="text-slate-50 text-2xl">Summary</h2>
          <p className="mt-4 text-sky-100">
            I have been a full-stack developer, researcher, user experience
            developer, front-end developer, and I am currently a lead developer.
            I have led various projects, written React, Python and C#
            applications, built a physical 3D bar chart using custom hardware,
            and ran user testing sessions and workshops. I've been fortunate to
            have experienced various aspects of development, both from a
            technical and leadership standpoint. etc.
          </p>
          <p className="mt-2 text-sky-100">
            I love working in an agile team, especially mobbing and pairing with
            developers, coaching those new to the field, and collaborating with
            stakeholders. It's a rewarding experience working together,
            delivering outcomes regularly, and reflecting and improving on the
            way we work.
          </p>
          <p className="mt-2 text-sky-100">
            Technically, my passion ultimately lies with front-end technologies
            and creating beautiful, inclusive, and usable experiences for
            end-users with maintainable, tested, and robust code behind it. To
            achieve this, I believe in investing in the people and their
            motivation and creating a positive work environment, e.g. through
            autonomy, psychological safety, challenges, growth opportunities,
          </p>
        </Slice>
        <Slice bgColor="bg-gray-800">
          <h2 className="text-2xl text-slate-50">Highlights</h2>
        </Slice>
        <Slice bgColor="bg-emerald-950">
          <h2 className="text-2xl text-slate-50">Portfolio</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {categoryList.map((category) => (
              <div className="mb-4 bg-gray-500">
                <div className="flex items-center bg-fuchsia-100 min-h-40 text-blue-950 px-6 py-4">
                  <i
                    className={`fa ${category.icon} fa-2x`}
                    aria-hidden="true"
                  ></i>
                  <p className="ml-4">{category.description}</p>
                </div>
                <p className="inline-block px-6 mt-4 pb-4">
                  <a
                    className="flex items-center hover:underline"
                    href={category.url}
                  >
                    <span>View {category.name}</span>
                    <span className="ml-2 no-underline">
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
              </div>
            ))}
          </div>
        </Slice>
      </main>
    </>
  );
};

export default Root;