function Project({ title, img, description, repository, link, stack }) {
  const color = (name) => {
    const color = {
      Laravel: "bg-red-500",
      PHP: "bg-purple-800",
      Livewire: "bg-pink-500",
      TailwindCSS: "bg-sky-500",
      CSS: "bg-sky-400",
      Javascript: "bg-yellow-400",
      HTML: "bg-orange-500",
      Bootstrap: "bg-violet-500",
      "Alpine.js": "bg-blue-500",
      React: "bg-blue-400",
      MySQL: "bg-blue-600",
    };
    return color[name];
  };

  return (
    <li className="relative flex flex-col items-start p-2 bg-white rounded-md sm:flex-row ">
      <div className="order-1 sm:ml-6 ">
        <div className="flex items-end flex-wrap">
          {stack.map((name, index) => (
            <div key={index}>
              <span className="text-xs lowercase bg-white border border-slate-200 border-b-slate-300 text-slate-500 rounded-full py-0.5 px-2 inline-block mr-0.5 hover:cursor-default">
                <span
                  className={`inline-block h-2 w-2 rounded-full mr-0.5 ${color(
                    name
                  )}`}
                ></span>
                {name}
              </span>
            </div>
          ))}
        </div>
        <h3 className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
          <span className="block mb-1 text-lg leading-6 text-indigo-500">
            {title}
          </span>
        </h3>

        <div className="prose-sm prose prose-slate text-slate-600 dark:prose-dark">
          <p>{description}</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 mt-4 text-sm font-semibold rounded-full group h-9 whitespace-nowrap focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
          href={repository}
        >
          Repositorio
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 mt-4 mx-1 text-sm font-semibold rounded-full group h-9 whitespace-nowrap focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
          href={link}
        >
          Ver
        </a>
      </div>
      <img
        src={img}
        alt={title}
        className="mb-2 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 "
      />
    </li>
  );
}

export default Project;
