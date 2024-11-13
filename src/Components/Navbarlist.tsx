import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import { AiFillDashboard } from "react-icons/ai";
import '/Users/CT_USER/Desktop/task acting office/task1/src/App.css'
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: "border-box",
    border: "1px solid #eee",
  },
  // these link styles override the default truncation behavior
  link: {
    whiteSpace: "normal",
    lineHeight: "inherit",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "News",
        url: "",
        // icon: <AiFillDashboard />,
        key: "key7",
        title: "",
      },
      {
        name: "Shared Documents and Files",
        url: "",
        icon: "News",
        key: "key3",
        title: "",
      },
      {
        name: "Pages",
        url: "",
        icon: "News",
        key: "key4",
        title: "",
      },
      {
        name: "Communication and Media",
        url: "",
        icon: "News",
        key: "key6",
        title: "",
      },
    ],
  },
];

export const NavWrappedExample: React.FunctionComponent = () => {
  return (
    <Nav
    className="navHeightCustom"
      selectedKey="key6"
      ariaLabel="Nav example with wrapped link text"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};