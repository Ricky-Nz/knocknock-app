import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

let AddButton = ({style, onClick}) => (
  <FloatingActionButton style={style} onClick={onClick}>
    <ContentAdd/>
  </FloatingActionButton>
);

export default AddButton;