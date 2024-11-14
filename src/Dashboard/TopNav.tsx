import {
  DefaultPalette,
  Label,
  PanelType,
  Stack,
  FontWeights,
} from "@fluentui/react";
// import React, { useId } from "react";
import { useState } from "react";
import { IStackStyles, IStackTokens, IStackItemStyles } from "@fluentui/react";
import { Icon } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react";
import { Panel } from "@fluentui/react";
 import { Field } from "formik";
import { TextField } from "@fluentui/react";
import axios from "axios";
// import { idContent } from '../../registration/regiscontext/idcontext';
// import { useContext } from "react";
import { mergeStyleSets } from "@fluentui/react";
// import { useBoolean } from "@fluentui/react-hooks";
// import { DefaultButton } from "@fluentui/react/lib/Button";

interface detailsType {
  userName: string;
  firstName: string;
  lastName: string;
  presentAddress: string;
  email: string;
  currentCompany: string;
  designation: string;
  totalExperience: string;
}

const TopNav: React.FC = () => {
  //   const { id, setId } = useContext(idContent);
  const [details, setDetails] = useState<detailsType>({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    presentAddress: "",
    currentCompany: "",
    designation: "",
    totalExperience: "",
  });

  const [isDisable, setIsDisable] = useState(true);

  const handleData = async (id: string) => {
    console.log("hello", id);

    try {
      const response = await axios.get(
        `http://localhost:5031/api/SignIn/GetDetails/${id}`
      );

      console.log("Values fetched successfully", response.data);
      setDetails({
        userName: response.data.userName,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        presentAddress: response.data.presentAddress,
        email: response.data.email,
        currentCompany: response.data.currentCompany,
        designation: response.data.designation,
        totalExperience: response.data.totalExperience,
      });
    } catch (err) {
      console.error("Cannot get Values", err);
    }
  };

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  //   const [isCallout, setIsCallout] = useState(false);

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

  const handleInfo = () => {
    setIsPanelOpen(true);
    // handleData(id);
  };

  const handleDisable = () => {
    setIsDisable(!isDisable);
  };

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
            <PrimaryButton onClick={handleInfo}>
              <Icon iconName="Contact" styles={{
                  root: {
                    marginRight: 5,
                  },
                }} />
              <span>
                {/* <p>{details.userName}</p>
                 */}
                 <p> UserName</p>
              </span>
            </PrimaryButton>
          </span>
        </Stack.Item>
      </Stack>
   {/* {isCallout && (
        <Callout          
          role="dialog"
          gapSpace={0}
          className={styles.callout}
          onDismiss={() => setIsCallout(false)}
          setInitialFocus
        >
          wsfgawjkfgawifgb
          sdfgasd
        </Callout>
      )} */}
      <Panel
        isOpen={isPanelOpen}
        onDismiss={() => setIsPanelOpen(false)}
        headerText="Welcome"
        // type={PanelType.smallFluid}
        type={PanelType.medium}
      >
        <Stack
          styles={{ root: { backgroundColor: "lightgrey", height: "100vh" } }}
        >
          <Stack
            horizontalAlign="center"
            styles={{
              root: { marginTop: 100, marginRight: 10, marginLeft: 10 },
            }}
          >
            <Stack
              styles={{
                root: {
                  width: "90%",
                  border: "1px solid black",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                },
              }}
            >
              <Stack horizontalAlign="space-between" horizontal>
                <Stack.Item>Personal Information</Stack.Item>
                <Stack.Item>
                  {isDisable ? (
                    <button
                      onClick={handleDisable}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <Icon iconName="edit"></Icon>
                    </button>
                  ) : (
                    <Stack horizontal>
                      <Stack.Item>
                        <button
                          onClick={handleDisable}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Icon iconName="save"></Icon>
                        </button>
                      </Stack.Item>
                      <Stack.Item>
                        <button
                          onClick={handleDisable}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Icon iconName="cancel"></Icon>
                        </button>
                      </Stack.Item>
                    </Stack>
                  )}
                </Stack.Item>
              </Stack>
              <Stack>
                <form action="" aria-disabled>
                  <Stack horizontal>
                    <Stack.Item
                      styles={{
                        root: {
                          width: "50%",
                          marginBottom: 20,
                          paddingRight: 5,
                        },
                      }}
                    >
                      <Label>Email</Label>
                      <TextField
                        value={details.email}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>

                    <Stack.Item
                      styles={{ root: { width: "50%", paddingLeft: 5 } }}
                    >
                      <Label>Username</Label>
                      <TextField
                        value={details.userName}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>
                  </Stack>

                  <Stack horizontal>
                    <Stack.Item
                      styles={{
                        root: {
                          width: "50%",
                          marginBottom: 20,
                          paddingRight: 5,
                        },
                      }}
                    >
                      <Label>First Name</Label>
                      <TextField
                        value={details.firstName}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>

                    <Stack.Item
                      styles={{ root: { width: "50%", paddingLeft: 5 } }}
                    >
                      <Label>Last Name</Label>
                      <TextField
                        value={details.lastName}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>
                  </Stack>

                  <Stack horizontal>
                    <Stack.Item
                      styles={{
                        root: {
                          width: "50%",
                          marginBottom: 20,
                          paddingRight: 5,
                        },
                      }}
                    >
                      <Label>Present Address</Label>
                      <TextField
                        value={details.presentAddress}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>

                    <Stack.Item
                      styles={{ root: { width: "50%", paddingLeft: 5 } }}
                    >
                      <Label>Current Company</Label>
                      <TextField
                        value={details.currentCompany}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>
                  </Stack>

                  <Stack horizontal>
                    <Stack.Item
                      styles={{
                        root: {
                          width: "50%",
                          marginBottom: 20,
                          paddingRight: 5,
                        },
                      }}
                    >
                      <Label>Total Experience</Label>
                      <TextField
                        value={details.totalExperience}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>

                    <Stack.Item
                      styles={{ root: { width: "50%", paddingLeft: 5 } }}
                    >
                      <Label>Designation</Label>
                      <TextField
                        value={details.designation}
                        disabled={isDisable}
                      ></TextField>
                    </Stack.Item>
                  </Stack>
                </form>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Panel>
    </>
  );
};

export default TopNav;
