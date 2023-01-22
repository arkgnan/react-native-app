import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const AppButton = ({onPress, title, size, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.primaryButton,
        size === 'sm' && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6,
        },
        backgroundColor && {backgroundColor},
      ]}>
      <Text style={[styles.primaryButtonText, size === 'sm' && {fontSize: 14}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  primaryButton: {
    elevation: 8,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  primaryButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
