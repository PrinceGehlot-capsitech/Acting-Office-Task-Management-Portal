import * as React from "react";
import { Stack } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";

export const CommandBarButtonAsExample: React.FunctionComponent = () => {
  return (
    <Stack>
      <PrimaryButton
        text="Primary"
        onClick={_alertClicked}
        allowDisabledFocus
      />
    </Stack>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}
