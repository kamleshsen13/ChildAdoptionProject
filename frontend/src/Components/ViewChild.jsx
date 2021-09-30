import React, { Component } from "react";
import ChildService from "../Services/ChildService";
import image1 from "../Images/111.jpg";

class ViewChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      child: {},
      childImg: "",
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    ChildService.getChildById(this.state.id).then((res) => {
      this.setState({ child: res.data });
    });
  }

  render() {
    return (
        <div id="view">
      <div>
        <br></br>
        <div>
          <a href="/UserPage/childData" className="offset-md-11">
            Back
          </a>
        </div>
        
        <div className="card col-md-6 offset-md-3" >
          <h3 className="text-center"> View Child Details</h3>
          <div className="card-body">
            {this.state.id == "1" && (
              <img
                src="https://www.cry.org/wp-content/uploads/2020/07/home-story-covid.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "2" && (
              <img
                src="https://www.verywellfamily.com/thmb/DUTf87y7J3Lv0d3cxPiVUcqt_gI=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/181451278-56a258395f9b58b7d0c931fd.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "3" && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegWwP7szxIkWyEfTV_fMQtuzBbWsEtkW-BA&usqp=CAU"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "4" && (
              <img
                src="https://vinusimages.co/wp-content/uploads/2018/10/5.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "5" && (
              <img
                src="https://cdn.givind.org/static/images/categorypage/v3/mobile/mobile-education.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "6" && (
              <img
                src="https://images.unsplash.com/photo-1552457309-e45be97707ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHlvdW5nJTIwY2hpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "7" && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGxvWDcWwKmN8_Hc5T5gestQ9C5HhQknDcw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGxvWDcWwKmN8_Hc5T5gestQ9C5HhQknDcw&usqp=CAU"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "8" && (
              <img
                src="https://images.indianexpress.com/2019/07/child-play-gettyimages.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "9" && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI1iBMkbQkDiLZDgoMkgFgZKE3Si-sXP-7Q&usqp=CAU"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "10" && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjiPIyAMuH7XlLfWesKCAdL7-HKGSMcIddA&usqp=CAU"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "11" && (
              <img
                src="https://images.unsplash.com/photo-1580749453741-5ced78eacf4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwYmFieXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "12" && (
              <img
                src="https://amshq.org/-/media/Images/Main-Site/Families/Why-Choose-Montessori/Benefits-of-Montessori-Update_Teaser.ashx?c=1&cw=280&ch=280&hash=F5996FEEFE71953A0425CF5B905D11DBC7D6BE87"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "13" && (
              <img
                src="https://i.pinimg.com/236x/51/bd/89/51bd8921284c0071e86b1e83421cde7c.jpg"
                height="350px"
                class="card-img-top"
              />
            )}
            {this.state.id == "14" && (
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2011%2F10%2F12225609%2Fnewborn_baby_in_hospital_0.jpg&q=85"
                height="350px"
                class="card-img-top"
              />
            )}
            <div className="row">
              <label>
                {" "}
                <b>Child Name:</b> {this.state.child.childName}{" "}
              </label>
            </div>

            <div className="row">
              <label>
                <b>Handicaped: </b>
                {this.state.child.handicaped}{" "}
              </label>
              <br />
            </div>
            <div className="row">
              <label>
                <b>Agency Name: </b> {this.state.child.agencyNamee}
              </label>
              <br />
            </div>
            <div className="row">
              <label>
                <b>Child Description: </b> {this.state.child.descChild}
              </label>
              <br />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ViewChild;
