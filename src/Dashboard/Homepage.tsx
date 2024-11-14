import React from "react";

import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import { TaskPanel } from "./TaskPanel";

const stackStyles: IStackStyles = {
  root: {
    overflow: "hidden",
  },
};

const panelStackStyles: IStackStyles = {
  root: {
    width: "15%",
    overflow: "auto",
    height: "100%",
  },
};

const contentStackStyles: IStackStyles = {
  root: {
    width: "85%",
    overflow: "auto",
  },
};

function HomePage() {
  return (
    <>
      <Stack horizontal styles={stackStyles}>
        <Stack styles={panelStackStyles}>
          <SideNav />
        </Stack>
        <Stack styles={contentStackStyles}>
          <TopNav />
          <TaskPanel />
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
