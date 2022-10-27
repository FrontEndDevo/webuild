const CallBack = () => {
  return (
    <div className="flex gap-12 my-10 p-12">
      <div className="content w-2/5">
        <h2 className="text-5xl uppercase font-bold">
          Request a <span className="text-orange-600">call back</span>
        </h2>
        <p className="my-10 text-gray-600 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,
          unde commodi dignissimos iusto rerum aliquid assumenda doloribus, iure
          aperiam totam voluptate nostrum sunt eligendi voluptatem voluptates
          rem, ducimus voluptatibus nulla voluptas quaerat quisquam natus
          blanditiis alias! Veniam, culpa ab provident corrupti, ratione
          assumenda officiis iusto tempore nihil, debitis inventore?
        </p>
        <button className="uppercase text-white bg-orange-600 py-4 px-14">
          Get a quote
        </button>
      </div>
      <form className="bg-gray-200 flex flex-col gap-y-4 p-8 w-3/5">
        <div className="main-info grid grid-cols-2 gap-4">
          <input className="bg-white p-3" type="text" placeholder="Your Name" />
          <input
            className="bg-white p-3"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="bg-white p-3"
            type="text"
            placeholder="Call Back Date"
          />
          <input
            className="bg-white p-3"
            type="text"
            placeholder="Call Back Time"
          />
        </div>
        <textarea
          className="bg-white p-3"
          placeholder="Message"
          rows="6"
        ></textarea>
        <button className="uppercase text-white bg-orange-600 py-4 px-14">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CallBack;
