import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jd, setjd] = useState("");
  const [jt, setjt] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
    );

     

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
      jd,jt
    };

    addContact(data);
    toast.success("Job added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Job</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="job title"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="salary"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
           

              <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="job type"
                value={jd}
                onChange={(e) => setjt(e.target.value)}
              />
              </div>
              
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="jobt itle"
                value={jt}
                onChange={(e) => setjd(e.target.value)}
              />
            </div>
             <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
