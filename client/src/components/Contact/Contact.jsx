import "./Contact.css"


function Contact(){
    return(
        <>
         <div className="container">
    <div className="row py-5 g-3">
      <div className="col-md-6 first_col">
        <h1 className="text-center mt-3">Contact Us</h1>
        <form className="p-4 mt-5">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter your name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Type your message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Send Now</button>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <img src="../images/contact.webp" className="img-fluid" alt="" />
      </div>
    </div>
    <div className="last_row">
      <div className="row row-cols-1 row-cols-md-3 p-3 text-white">
        <div className="col">
          <h4>CALL US</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            laborum fuga enim facilis beatae quisquam{" "}
          </p>
        </div>
        <div className="col">
          <h4>Location</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            laborum fuga enim facilis beatae quisquam{" "}
          </p>
        </div>
        <div className="col">
          <h4>Email</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            laborum fuga enim facilis beatae quisquam{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default Contact;