const VolunteerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-poppins">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea name="message" id="message" cols="30" rows="10">
        Message
      </textarea>
      <button
        type="submit"
        className="text-white bg-primary rounded-md w-fit mx-auto font-bold text-base py-5 px-9"
      >
        Send Message
      </button>
    </form>
  );
};

export default VolunteerForm;
