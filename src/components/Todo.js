/**
 * Name: /src/components/Todo.js
 *
 * Description: This is an individual todo.

 TODO:
 - Make this uniform with other components (aka have it extend Component, be a class, etc)

 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */

import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const iconStyles = {
  margin: 5,
}

const Todo = ({ onClick, onDelete, completed, text, dispatch }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Checkbox
      name="StylesOverridingInlineExample"
      label=""
      checked={completed}
      onClick={onClick}
      style={{
        display: 'inline-block',
        width: '',
        margin: '0 10',
        verticalAlign: 'center',
      }}
    />
    <TextField
      hintText="Full width"
      fullWidth={false}
      value={text}
      disabled={completed}
    />
    <IconButton
      onTouchTap={onDelete}
      tooltip="Delete Todo">
      <FontIcon className="material-icons" style={iconStyles} >delete</FontIcon>
    </IconButton>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
//  onType: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
