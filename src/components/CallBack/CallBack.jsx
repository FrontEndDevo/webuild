import React from "react";

const CallBack = () => {
  return <div>
    <div className="content">
      <h2>Request a <span>call back</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime, unde commodi dignissimos iusto rerum aliquid assumenda doloribus, iure aperiam totam voluptate nostrum sunt eligendi voluptatem voluptates rem, ducimus voluptatibus nulla voluptas quaerat quisquam natus blanditiis alias! Veniam, culpa ab provident corrupti, ratione assumenda officiis iusto tempore nihil, debitis inventore?</p>
      <button>Get a quote</button>
    </div>
    <form>
      <div className="main-info">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Call Back Date" />
        <input type="text" placeholder="Call Back Time" />
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Submit Request</button>
    </form>
  </div>;
};

export default CallBack;
