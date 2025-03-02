const VolunteerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-poppins">
      <input
        type="text"
        placeholder="Name"
        className="text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="email"
        placeholder="Email"
        className="text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="text"
        placeholder="Subject"
        className="text-gray-600 p-3 rounded-md shadow-sm"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        className="text-gray-400 p-3 rounded-md shadow-sm h-60"
      >
        Message
      </textarea>
      <button
        type="submit"
        className="text-white bg-button rounded-md w-fit mx-auto font-bold text-base py-5 px-9"
      >
        Send Message
      </button>
    </form>
  );
};

export default VolunteerForm;
