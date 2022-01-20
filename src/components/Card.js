
// Removed unused useEffect import
import React, { useState } from "react";
import Image from "./Image";
import './Card.css';

class Card extends React.Component {
  static defaultPhoto = 'no_image.png'
  
  constructor(props) {
    super(props);
    this.state = { clicked: false, };
    // OR: this.handleClick = this.handleClick.bind(this)
    // if not using the arrow method sytax (EXPERIMENTAL?)

    // Create an assets context to pull from react build folders dynamic images
    this.assets = require.context('../assets', true);
  }

  handleClick = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    let { name, image, type, brandName, price, storeName } = this.props.cardResults;

    // Load default image if no image for this card
    image = image ?? this.assets(`./${Card.defaultPhoto}`).default;

    // Inline style for outer div should be moved to a stylesheet
    // <div style={{ border: "1px solid black" }} ...>
    return (
      <div className='Card' onClick={this.handleClick} title='Click to see pricing details'>

        {/*
          Some devs do not prefer the shorthand syntax because the falsy values like "" and false 
          {this.state.clicked && (
          <div>
            <p>Price: {price}</p>
            <p>{storeName}</p>
          </div>
        )} */}
        <h2>{name}</h2>

        {/* 
          Replaced <img> tag with <Image> component instead
          since it was not being used anywhere in the repo?
          <img
          alt="alt"
          src={image}
          style=
        ></img> */}
        <Image className='Image' src={image} alt={name} width={100} />

        {/* Added some styling to labels */}
        <p className={'Card-type'}>{type}</p>
        <p className={'Card-brand'}>{brandName}</p>

        {/* Moved this because the price and store didn't make sense up top */}
        {this.state.clicked ? ( <div> <p>${price} at {storeName}</p> </div>) : null}
      </div>
    );
  }
}

export default Card;

// OR could convert Card to be functional component utilizing hooks instead of local state
// BUT I see why you included it in the demo repo ;)

export const CardFunctional = ({ cardResults: { name, image, type, brandName, price, storeName }}) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='Card' onClick={setClicked(true)}>
      {clicked && ( 
        <div>
          <p>Price: ${price}</p>
          <p>{storeName}</p>
        </div>
      )}
      <h1>{name}</h1>
      <Image className='Image' src={image ?? `${process.env.PUBLIC_URL}/${Card.defaultPhoto}`} alt={name} width={100} />
      <p className='Card-type'>{type}</p>
      <p className='Card-brand'>{brandName}</p>
    </div>
  )
}
