import React from 'react';

class Declarative extends React.Component {
  render() {
    return (
      <div>
        <img class="Component-Image" src="./images/icon1.png" alt="Icon 1" />
        <h3 class="Component-Headline">Declarative</h3>
        <p class="Component-Paragraph">
          React makes it painless to create interative UIs
        </p>
      </div>
    );
  }
}

export default Declarative;
