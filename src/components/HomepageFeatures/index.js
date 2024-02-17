import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";


// img
import streamitLogo from '../../../static/img/products/streamit/streamit-logo.png'
import socialvLogo from '../../../static/img/products/socialv/socialv-logo.png'

// svg
const qmpacSvg = <svg viewBox="0 0 32 32" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z" fill="#7016d0"></path>
  <path d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z" fill="#3FF0B9"></path>
</svg>

const coinexSvg = <svg width="36" class="text-primary" viewBox="0 0 128 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M117.348 105.33C117.594 105.476 117.669 105.799 117.508 106.036C110.26 116.759 99.5876 125.042 87.0232 129.687C74.2883 134.395 60.2849 135.117 47.0817 131.745C33.8785 128.372 22.1759 121.086 13.7027 110.961C5.22957 100.836 0.43531 88.4101 0.0282348 75.5189C-0.37884 62.6276 3.62286 49.9548 11.4421 39.3726C19.2614 28.7905 30.4835 20.8602 43.4505 16.7536C56.4176 12.6469 70.4417 12.5815 83.4512 16.5672C96.2865 20.4995 107.462 28.1693 115.375 38.4663C115.55 38.6939 115.495 39.0214 115.256 39.1813L97.3742 51.176C97.1539 51.3238 96.8567 51.2735 96.6942 51.0637C91.6372 44.53 84.5205 39.6627 76.3537 37.1606C68.031 34.6109 59.0591 34.6527 50.7636 37.2799C42.468 39.9071 35.2888 44.9804 30.2865 51.7502C25.2842 58.5201 22.7241 66.6274 22.9846 74.8745C23.245 83.1215 26.3121 91.0709 31.7327 97.5482C37.1533 104.025 44.64 108.687 53.0866 110.844C61.5332 113.002 70.4918 112.54 78.6389 109.528C86.6324 106.573 93.4288 101.316 98.0645 94.5111C98.2142 94.2913 98.5086 94.2233 98.7376 94.3583L117.348 105.33Z" fill="#FF971D"></path>
    <path d="M53.2837 0.5C53.2837 0.223858 53.5075 0 53.7837 0H75.6195C75.8957 0 76.1195 0.223858 76.1195 0.5V26.25H53.2837V0.5Z" fill="#FF971D"></path>
    <path d="M53.2837 123.75H76.1195V149.5C76.1195 149.776 75.8957 150 75.6195 150H53.7837C53.5075 150 53.2837 149.776 53.2837 149.5V123.75Z" fill="#FF971D"></path>
  </g>
</svg>
const ProductList = [
  {
    title: "Streamit",
    image: streamitLogo,
    svg: '',
    link: "/docs/streamit",
    description: "A video streaming platform.",
  },
  {
    title: "SocialV",
    image: socialvLogo,
    svg: '',
    link: "/docs/socialv",
    description: "Social media platform template.",
  },
  {
    title: "Coinex",
    image: '',
    svg: coinexSvg,
    link: "/docs/Coinex",
    description: "Dashboard Design for trading platform.",
  },
  {
    title: "Qompac Ui",
    image: "",
    svg: qmpacSvg,
    link: "/docs/qompac-ui",
    description: "Qompac UI - Admin Dashboard Template",
  },
];

function Feature({ image, title, description, link, svg }) {
  return (
    <div className="mt-3">
      <div className="custom-card card ">
        <div className="card-body">
          <div className="text--center">
            <Link to={link}>
              {image !== '' ? <img src={image} className="img-logo" role="img" alt="logo" /> : svg}
            </Link>
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className="mt-3">
              <Link to={link} className="text-decoration-none ">
                {title}
              </Link>
            </Heading>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row center">
          {ProductList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
