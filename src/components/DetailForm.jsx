/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { postFormDetails } from "../utils/formApi";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    services: []
  });

  const [service, setService] = useState([]);
  const [error, setError] = useState(false);
  const [formValidation, setFormValidation] = useState({
    name:false,
    email:false,
    phone:false,
    description:false
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    await validation();    
    if(error){
      alert("Invalid Input!!")
      return;
    }
    else{
    formData.services.splice(0, formData.services.length);
    formData.services.push(...service);
    const res = await postFormDetails(formData);
    console.log(res);
    } 
  };

  const validation = () => {
    if(formData.description.length === 0){
      setFormValidation({...formValidation, description:true});
      setError(true);
    }
    else{
      setFormValidation({...formValidation, description:false});
      setError(false);
    }
    if(!formData.phone.match(/^[0-9]+$/) || (formData.phone.length < 10 || formData.phone.length > 10 )){
      setFormValidation({...formValidation, phone:true});
      setError(true);
    }
    else{
      setFormValidation({...formValidation, phone:false});
      setError(false);
    }
    if(!formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
      setFormValidation({...formValidation, email:true});
      setError(true);
    }
    else{
      setFormValidation({...formValidation, email:false});
      setError(false);
    }
    if(!formData.name.match(/^[a-zA-Z]+$/)){
      setFormValidation({...formValidation, name:true});
      setError(true);
    }
    else{
      setFormValidation({...formValidation, name:false});
      setError(false);
    }
  }

  const CheckHandler = (e) => {
    const value = e.target.value;
    setService((prev) =>
      service.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

  useEffect(() => {
  }, [formData]);

  return (
    <div className="form-ieee container">
      <div className="inner row">
        <div className="col-lg-6 col-sm-5 imageClass"> 
          <img src={"https://i.pinimg.com/originals/4d/67/a4/4d67a43aa17482248bfb230107488159.jpg"} alt="gradient-img" className="gradient" />
        </div>
        <form onSubmit={(event) => handleSubmit(event)} className="col-lg-6 col-sm-7 col-xs-12 formArea">
          <h2>Let's level up your brand, together</h2>
          <p>You can reach us anytime via <strong>hi@untitledui.com</strong></p>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              required
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            { formValidation.name && <span className="error">Name Can Not be Empty and Name Must Only Contain Alphabets</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              value={formData.email}
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            { formValidation.email && <span className="error">Enter a valid email.</span>}

          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            { formValidation.phone && <span className="error">Phone Number must contain only be digits and of length 10</span>}

          </div>

          <div className="form-group">
            <label>How can we help?</label>
            <textarea
              rows="5" cols="50"
              className="form-control"
              placeholder="Tell us a little about the Project..."
              required
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            { formValidation.description && <span className="error">Description</span>}

          </div>

          <div className="form-group">
            <label>Service</label>
            <br />
            <div className="d-flex row">
              <div className="col-6 col-xs-12 outer-check">
                <input
                  type="checkbox"
                  id="website_design"
                  name="website_design"
                  value="Website Design"
                  onClick={CheckHandler}
                />
                <label for="Website_design" className="check-bx">Website Design</label>
                <br />
                <input
                  type="checkbox"
                  id="content_creation"
                  name="content_creation"
                  value="Content Creation"
                  onClick={CheckHandler}
                />
                <label for="content_creation" className="check-bx">Content Creation</label>
                <br />
                <input
                  type="checkbox"
                  id="ux_design"
                  name="ux_design"
                  value="UX Design"
                  onClick={CheckHandler}
                />
                <label for="ux_design" className="check-bx">UX Design</label>
              </div>
              <div className="col-6 outer-check">
                <input
                  type="checkbox"
                  id="Strategy_and_consulting"
                  name="Strategy_and_consulting"
                  value="Stratery And Consulting"
                  onClick={CheckHandler}
                />
                <label for="Strategy_and_consulting" className="check-bx">
                  Stratery And Consulting
                </label>
                <br />
                <input
                  type="checkbox"
                  id="user_research"
                  name="user_research"
                  value="User Research"
                  onClick={CheckHandler}
                />
                <label for="user_research" className="check-bx">User Research</label>
                <br />
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  value="Other"
                  onClick={CheckHandler}
                />
                <label for="other" className="check-bx">Other</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block cst-btn"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailForm;