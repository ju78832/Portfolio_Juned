import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import { useEffect, useState } from "react";
import{
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
} from "../../data.js";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured Web App",
    },
    {
      id: "web",
      title: "Web App Design",
    },
    {
      id: "problem",
      title: "Problem Solving",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "problem":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            URL= {item.URL}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item title_space" >
           <a href={d.URL}> <img
              src={d.img}
              alt=""
            /> </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
