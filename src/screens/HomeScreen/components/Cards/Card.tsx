import React, {FC} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {CardProps} from "./type";

const Card: FC<CardProps> = props => {
  const {navigationHandler, title, style} = props

  return (
    <TouchableOpacity
      onPress={() => navigationHandler('Details', {title: title})}
      style={[styles.card, style]}>{props.children}</TouchableOpacity>
  );
};

export default Card;