import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css'
// import SelectedBeast from './Components/SelectedBeast';


class Main extends React.Component {
  render() {
    return (
      <>
        {
          this.props.data.map((beast) => {
            return (
              <HornedBeasts
                image_url={beast.image_url}
                title={beast.title}
                key={beast._id}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}

              />
            )
          }
          )
        }
      </>
    )
  }
}

export default Main;
// "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// "title": "UniWhal",
// "description": "A unicorn and a narwhal nuzzling their horns",
// "keyword": "narwhal",
// "horns": 1