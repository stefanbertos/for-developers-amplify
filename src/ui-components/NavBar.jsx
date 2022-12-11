/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { user, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/createFood" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1439px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(174,179,183,0.1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Image
        width="89.33px"
        height="59px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Links")}
      >
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add food"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={user}
        {...getOverrideProps(overrides, "User")}
      ></Flex>
    </Flex>
  );
}
