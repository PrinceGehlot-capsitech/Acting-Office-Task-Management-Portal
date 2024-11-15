import {
  DefaultPalette,
  Stack,
  FontWeights,
  FocusTrapCallout,
  DefaultButton,
  FocusZone,
  FocusZoneTabbableElements,
} from "@fluentui/react";
import { IStackStyles, IStackTokens, IStackItemStyles } from "@fluentui/react";
import { Icon } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react";
import { mergeStyleSets } from "@fluentui/react";

import { useBoolean, useId } from '@fluentui/react-hooks';

const TopNav: React.FC = () => {

  const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themePrimary,
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      padding: 5,
    },
  };
  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
  const buttonId = useId('callout-button');
 
  const styles = mergeStyleSets({
    button: {
      width: 130,
    },
    callout: {
      width: 320,
      maxWidth: "90%",
      padding: "20px 24px",
    },
    title: {
      marginBottom: 12,
      fontWeight: FontWeights.semilight,
    },
    link: {
      display: "block",
      marginTop: 20,
    },
  });

  return (
    <>
      <Stack
        enableScopedSelectors
        styles={stackStyles}
        tokens={itemAlignmentsStackTokens}
      >
        <Stack.Item align="end" styles={stackItemStyles}>
          <span>
            <PrimaryButton id={buttonId} onClick={toggleIsCalloutVisible}>
              <Icon
                iconName="Contact"
                styles={{
                  root: {
                    marginRight: 5,
                  },
                }}
              />
              <span>
                <p> UserName</p>
              </span>
            </PrimaryButton>
          </span>
        </Stack.Item>
      </Stack>

      {isCalloutVisible ? (
        <FocusTrapCallout
          role="alertdialog"
          className={styles.callout}
          gapSpace={0}
          target={`#${buttonId}`}
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus
        >
          <p>
          Logout here
          </p>
          {/* This FocusZone allows the user to go between buttons with the arrow keys.
              It's not related to or required for FocusTrapCallout's built-in focus trapping. */}
          <FocusZone
            handleTabKey={FocusZoneTabbableElements.all}
            isCircularNavigation
          >
            <Stack  gap={8} horizontal>
              <PrimaryButton onClick={toggleIsCalloutVisible}>
                Logout
              </PrimaryButton>
              <DefaultButton onClick={toggleIsCalloutVisible}>
                Cancel
              </DefaultButton>
            </Stack>
          </FocusZone>
        </FocusTrapCallout>
      ) : null}
    </>
  );
};


export default TopNav;
