import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div className="container mx-auto px-5 font-bold">
        Movie
        {this.props.showTooltip && <div>showTooltip</div>}
      </div>
    );
  }
}

// const Movie = () => {
//   //   console.log(props.showTooltip.showTooltip);
//   return (
//     <div>
//       Movie
//     </div>
//   );
// };

export default withTooltip(Movie);
