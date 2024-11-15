import * as React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";
import {
  DefaultPalette,
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
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

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};
const options: IDropdownOption[] = [
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

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
              <p> Add Task </p>
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
                <Dropdown
                style={{width:"100%"}}
                  placeholder="Select options"            
                  options={options}
                  styles={dropdownStyles}
                />
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Due Date</Label>
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
                <Label>Assignee</Label>
                <Dropdown
                style={{width:"100%"}}
                  placeholder="Select options"                  
                  defaultSelectedKeys={["apple", "banana", "grape"]}
                  multiSelect
                  options={options}
                  styles={dropdownStyles}
                />
              </Stack.Item>

              <Stack.Item
                styles={{
                  root: {
                    marginBottom: 10,
                  },
                }}
              >
                <Label>Description</Label>
                <TextField
                  multiline
                  rows={3}
                  // value={details.currentCompany}

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
