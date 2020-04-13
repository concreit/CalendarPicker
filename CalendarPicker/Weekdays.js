import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';

export default function Weekdays(props) {
  const {
    styles,
    startFromMonday,
    weekdays,
    textStyle,
    dayLabelsWrapper,
    dayOfWeekStyles,
  } = props;
  let wd = weekdays;
  if (!wd) {
    wd = startFromMonday? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
  }

  return (
    <View style={[styles.dayLabelsWrapper, dayLabelsWrapper]}>
      { wd.map((day, key) => {
        let updatedStyle = textStyle;
        try {
          if (dayOfWeekStyles[+key]) {
            let currentDayStyle = dayOfWeekStyles[+key];
            if (currentDayStyle) {
              updatedStyle = [updatedStyle, currentDayStyle];
            }
          }
        } catch (error) {
          console.log('Error while updating weekday style: ' + error);
        }

          return (
            <Text key={key} style={[styles.dayLabels, {
              fontFamily: 'Proxima Nova',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 12,
              lineHeight: 15,
              color: '#999999',
            }]}>
              {day}
            </Text>
          );
        })
      }
    </View>
  );
}

Weekdays.propTypes = {};
