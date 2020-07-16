import React from "react";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="form2-wrap">
          <from className="form2-html">
            <div className="group">
              <label className="form-label">name:</label>
              <br />
              <input type="text" className="form-input" />
            </div>
            <br />
            <div className="group">
              <br />
              <label className="form-label">email:</label><br/>
              <input type="text" className="form-input" />
            </div>
            <br />
            <div className="group">
              <label className="form-label">phoneNumber:</label>
              <br />
              <input type="Number" className="form-input" />
            </div>
            <br />
            <div className="group">
              <label className="form-label"> comment:</label>
              <br />
              <input type="text" className="form-comment" />
            </div>
            <div className="group">
              <label className="form-label">passward</label>
              <br />
              <input
                type="password"
                className="form-input"
                data-type="password"
              />
            </div>
            <br />
            <div className="line"></div>
            <button className="form-submit" type="">Submit</button>
          </from>
        </div>

       
      </div>
    );
  }
}

export default Content;
