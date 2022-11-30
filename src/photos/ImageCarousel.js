import React from 'react';
import Carousel from 'react-material-ui-carousel';

const ImageCarousel = () => {
    const importAll = r => {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
    const photos = importAll(require.context('./', false, /\.(png|jpe?g|HEIC)$/));
    return (
        <Carousel autoPlay={true} animation="slide" indicators={false}>
            {
                Object.keys(photos).map((photo, i) => <Item item={photo} key={i} />)
            }
        </Carousel>
    )
}

const Item = props => <img style={{ maxWidth: '100vw', height: '600px' }} src={require('../photos/' + props.item)} alt={props.item} />;

export default ImageCarousel;