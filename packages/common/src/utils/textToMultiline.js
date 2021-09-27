import React from 'react';
import isArray from 'lodash/isArray';
import reactStringReplace from 'react-string-replace';

const textToMultiline = text =>
  reactStringReplace(isArray(text) ? text.join('') : text, '\n', (_, i) => <br key={i} />);

export default textToMultiline;
