import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { colors } from '../config/styles';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.inputBackground,
    marginLeft: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  divider: {
    height: 1,
    backgroundColor: colors.inputDivider,
    flex: 1,
    marginLeft: 10,
  },
  inputWrapper: {
    backgroundColor: colors.inputBackground,
    width: window.width,
  },
});

export const InputWrapper = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {props.children}
    </View>
  );
};

InputWrapper.propTypes = {
  children: React.PropTypes.array,
};

const GenericTextInput = (props) => {
  return (
    <View>
      {props.borderTop ? <View style={styles.divider} /> : null}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

GenericTextInput.propTypes = {
  borderTop: React.PropTypes.bool,
};

export default GenericTextInput;
