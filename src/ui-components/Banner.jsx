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
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Banner(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/createFood" });
  return (
    <Flex
      gap="0"
      direction="column"
      width="1439px"
      height="766px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="350px 279px 50px 279px"
      backgroundImage="https://www.captain-design.com/blog/content/images/2022/07/07-5.jpg"
      {...rest}
      {...getOverrideProps(overrides, "Banner")}
    >
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="600"
        color="rgba(245,245,245,1)"
        lineHeight="64px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join millions of neighbours all over the world who are using GiveAway to share more, care more and waste less."
        {...getOverrideProps(overrides, "TextMessage")}
      ></Text>
      <Button
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Add food"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
