import React from "react";
import { Card } from "antd";

const SingleJobCard = (Props) => {
  const {logo, postedAt, contract, position, company, location} = Props.cardItems
    return (
        <div className="site-card-border-less-wrapper">
            <Card
                //   title="Card title"
                bordered={true}
                style={{
                    width: 350,
                    backgroundColor: " #deeaee",
                }}  
            >
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="card_header flex gap-2">
                    <p className="posted_time">{postedAt}</p>
                    <p className="contract">{contract}</p>
                </div>
                <h3>{position}</h3>
                <p>{company}</p>
                <p>{location}</p>
            </Card>
        </div>
    );
};

export default SingleJobCard;
