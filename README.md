# Card Carousel

Create a card carousel using this component by giving it a list of ReactNode items.

## Installation

```
npm install card-carousel-reactjs
```

## Usage
To use the CardCarousel component, import it into your project and pass an array of ReactNode items to it.

```
import CardCarousel from 'card-carousel-reactjs';

// Use the CardCarousel component
<CardCarousel
  items={[
    <div>Card One</div>,
    <div>Card Two</div>,
    <div>Card Three</div>,
    <div>Card Four</div>,
    <div>Card Five</div>,
  ]}
/>
```

## Props

The CardCarousel component accepts the following props:

- items (required): An array of ReactNode items to be displayed in the carousel.
- width (optional): The width of each card. Default is 350px.
- height (optional): The height of each card. Default is 150px.


## Example

To customize the width and height of the carousel items:

```
<CardCarousel
  items={[
    <div>Card One</div>,
    <div>Card Two</div>,
    <div>Card Three</div>,
  ]}
  width={400}
  height={200}
/>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.