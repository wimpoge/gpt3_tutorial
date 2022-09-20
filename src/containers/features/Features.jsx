import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque quos, quam deserunt eum doloribus!",
  },
  {
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque quos, quam deserunt eum doloribus!",
  },
  {
    title: "Title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque quos, quam deserunt eum doloribus!",
  },
  {
    title: "Title 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque quos, quam deserunt eum doloribus!",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          beatae?
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
