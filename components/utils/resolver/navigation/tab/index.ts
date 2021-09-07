import * as icons from "components/_icons";

interface navElement {
  title: string;
  icon: JSX.Element;
  route: string;
}

const iconProps = {
  width: "25px",
  height: "25px",
  color: "8F8F8F",
};

const filterNavElements: navElement[] = [
  {
    title: "Youtube",
    icon: icons.YoutubeIcon({}),
    route: "/dashboard/search/youtube",
  },
  {
    title: "Facebook",
    icon: icons.FacebookIcon({}),
    route: "/dashboard/search/facebook",
  },
  {
    title: "Linkedin",
    icon: icons.LinkedinIcon({}),
    route: "/dashboard/search/linkedin",
  },

  {
    title: "Google",
    icon: icons.GoogleIcon({}),
    route: "/dashboard/search/google",
  },
];

export default filterNavElements;