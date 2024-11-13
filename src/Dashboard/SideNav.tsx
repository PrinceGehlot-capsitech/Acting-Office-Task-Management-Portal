import React from "react";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react";
import { DefaultPalette } from "@fluentui/react/lib/Styling";
import { Stack, IStackStyles, IStackTokens } from "@fluentui/react";

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Dashboard",
        url: "/",
        icon: "Home",
      },
      {
        name: "Leaves",
        url: "/",
        icon: "Calendar",
      },
      {
        name: "Attendance Request",
        url: "/",
        icon: "Calendar",
      },
      {
        name: "Reports",
        url: "/",
        icon: "BarChartVerticalFill",
      },
      {
        name: "Events",
        url: "/",
        icon: "Calendar",
      },
      {
        name: "Company policies",
        url: "/",
        icon: "News",
      },
    ],
  },
];

const stackStyles: IStackStyles = { root: { height: "100%" } };
const stackTokens: IStackTokens = { childrenGap: 10 };

const navStyles = {
  root: {
    background: DefaultPalette.white,
    color: DefaultPalette.black,
  },
  link: {
    color: DefaultPalette.black,
    background: DefaultPalette.white,
    selectors: {
      "&:hover": {
        background: DefaultPalette.white,
      },
      "&.is-selected": {
        background: DefaultPalette.themeLight,
      },
    },
  },
};

function SideNav() {
  return (
    <>
      <Stack styles={stackStyles} tokens={stackTokens}>
        <Stack.Item>
          <Nav styles={navStyles} groups={navLinkGroups} />
        </Stack.Item>
      </Stack>
    </>
  );
}

export default SideNav;
