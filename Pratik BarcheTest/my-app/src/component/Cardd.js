
import React from 'react';
import './card.css';
import { Card } from 'antd';

const { Meta } = Card;

const Cardd = ({ title, description,imgSrc}) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300, margin: '10px' }}
        cover={<img alt="example" src={imgSrc || 'https://via.placeholder.com/300x200'} />}
      >
        <Meta title={title}/>
        <meta description={description} />
      </Card>
    </div>
  );
};

export default Cardd;
