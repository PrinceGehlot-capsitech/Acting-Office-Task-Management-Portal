import * as React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";
import {
  DefaultPalette,
  IStackItemStyles,
  Label,
  Stack,
  TextField,
} from "@fluentui/react";

import { Icon } from "@fluentui/react";
// for initial icon
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

const buttonStyles = { root: { marginRight: 8 } };

export const TaskPanel: React.FunctionComponent = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const stackItemStyles: IStackItemStyles = {
    root: {
      color: DefaultPalette.white,
      padding: 15,
    },
  };
  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <PrimaryButton onClick={dismissPanel} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
      </div>
    ),
    [dismissPanel]
  );

  return (
    <div>
      <Stack.Item align="end" styles={stackItemStyles}>
        <span>
          <PrimaryButton onClick={openPanel}>
            <Icon
              iconName="CalculatorAddition"
              styles={{
                root: {
                  paddingRight: 5,
                },
              }}
            />
            <span>
              {/* <p>{details.userName}</p>
               */}
              <p> Add Task</p>
            </span>
          </PrimaryButton>
        </span>
      </Stack.Item>
      {/* <PrimaryButton text="Open panel" onClick={openPanel} /> */}
      <Panel
        isOpen={isOpen}
        type={PanelType.medium}
        onDismiss={dismissPanel}
        headerText="Add task"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
        // Stretch panel content to fill the available height so the footer is positioned
        // at the bottom of the page
        isFooterAtBottom={true}
      >
        <Stack>
          <form action="" aria-disabled>
            <Stack>
              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Project</Label>
                <TextField  
                // value={details.email}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Title</Label>
                <TextField
                // value={details.userName}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Priority</Label>
                <TextField
                // value={details.firstName}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Last Name</Label>
                <TextField
                // value={details.lastName}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Present Address</Label>
                <TextField
                // value={details.presentAddress}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Current Company</Label>
                <TextField
                // value={details.currentCompany}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Total Experience</Label>
                <TextField
                // value={details.totalExperience}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Designation</Label>
                <TextField
                // value={details.designation}

                // disabled={isDisable}
                ></TextField>
              </Stack.Item>
            </Stack>
          </form>
        </Stack>
      </Panel>
    </div>
  );
};
