import React from 'react'

const Blog = () => {
  return (
    <div className="blog container mt-5">
      <div className="content text-center">
        <h3>Latest Blog Posts</h3>
        <i>You're on Rentify's blog! Here you find tips for the best car rental experience and travel guides to inspire your next trip.</i>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/Rent-car-To-Discover-Delhi.jpg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Get A Car For Rent To Discover Ahmedabad</h5>
              <p className="card-text">If You Are New To Ahmedabad And Want To Discover The City Without Any Interference From Tour Guides, You Have Come To The Right Place. At Rentify, You Can Rent A Car Yourself Or Get A Designated Driver And Explore The City All On Your Own</p>
              <a href="#" className="btn btn-primary">READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/airport-transfer-service.jpg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Tips For A Successful Airport Transfer Service</h5>
              <p className="card-text">Booking Airport Transfers Can Be Perplexing, Especially If You Are Doing So For The First Time. Add To That The Tight Flight Schedules, Last-Minute Flight Changes</p>
              <a href="#" className="btn btn-primary">READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/car.jpg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Employee Transfers: Boosting Productivity and Collaboration Across Teams
              </h5>
              <p className="card-text">Employee transfers play a crucial role in the dynamic landscape of modern businesses. By strategically moving employees across teams and departments, organisations can enhance productivity, foster collaboration, and promote knowledge sharing. In this blog post, we will explore how employee transfers.</p>
              <a href="#" className="btn btn-primary">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Blog