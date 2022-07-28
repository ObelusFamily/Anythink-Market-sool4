import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({onItemsChange}) => {
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (query.length < 3) return;

    fetch(`//localhost:3000/api/items?title=${query}`).then((r) => r.json()).then((data) => onItemsChange(data.items))
  }, [query, onItemsChange])

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input type="search" id="search-box" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
