import React, { Component } from "react";
import ChildService from "../Services/ChildService";
import { Link } from "react-router-dom";
class ListChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childes: [],
      childimage: [
        "https://www.verywellfamily.com/thmb/DUTf87y7J3Lv0d3cxPiVUcqt_gI=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/181451278-56a258395f9b58b7d0c931fd.jpg",
        "https://www.cry.org/wp-content/uploads/2020/07/home-story-covid.jpg",
      ],
    };
    this.addChild = this.addChild.bind(this);
  }

  componentDidMount() {
    ChildService.getChildes().then((res) => {
      this.setState({ childes: res.data });
    });
  }

  viewChild(id) {
    this.props.history.push(`/view-child/${id}`);
  }
  addChild() {
    this.props.history.push("/add-child/_add");
  }

  render() {
    return (
      <div id="childdata">
        <a href="/UserPage" className="offset-md-11">
          Back
        </a>
        <br></br>
        <div className="row">
          {this.state.childes.map((child) => (
            <div class="card col-2 border-primary offset-1">
              <div class="card-body">
                <b>Child Id- </b>
                {child.id}
                <br />

                <b>Name- </b>
                {child.childName}
                <br />
                <b>Gender- </b>
                {child.gender}
                <br />
                <b>Age- </b>
                {child.age}
                <br />
                <button
                  onClick={() => this.viewChild(child.id)}
                  className="btn btn-info col-12"
                  type="submit"
                >
                  More Details
                </button>
                <Link
                  to={{
                    pathname: "/add-register/_add",
                    state: { chlID: child.id },
                  }}
                >
                  {/* <Link to = {{pathname : "/add-register/_add", state : {chlId : child.id }}}> */}
                  <button className="btn btn-warning col-12" type="submit">
                    Register to Adopt
                  </button>
                </Link>
              </div>
            </div>
       
          ))}
         
        </div>
      </div>
    );
  }
}

export default ListChild;
