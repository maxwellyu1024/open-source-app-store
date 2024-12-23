const Contact = () => (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-600 text-center mb-6">
        Have questions or feedback? We'd love to hear from you.
      </p>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            className="w-full p-3 border rounded"
            rows={5}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
  
  export default Contact;
  