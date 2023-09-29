import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json';
import Error404 from '../components/Error404';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const HousingContent = () => {
  const { id } = useParams();
  const housingData = data.find((el) => el.id === id);

  if (!housingData) {
    return <Error404 />;
  }

  return (
    <div className="housing">
       <Carousel housingData={housingData}/>

      <div className="housing-content">
        <div className="content-one">
          <h1>{housingData.title}</h1>
          <p>{housingData.location}</p>
          <div className="tags">
            {housingData.tags.map((tag, index) => (
              <Tags key={index} content={tag}/>
            ))}
          </div>
        </div>

        <div className="content-two">
          <Host hostData={housingData.host} />
          <Rating rating={housingData.rating} />
        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description" content={housingData.description} housing={true}/>
        <Collapse title="Equipements" content={housingData.equipments} housing={true} listing={true} />
      </div>
    </div>
  );
};

export default HousingContent;