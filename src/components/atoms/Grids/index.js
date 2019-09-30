import React from 'react';
import { GridsComponent, GridComponent } from './style';

export const Grids = (props) => {
  return (
    <GridsComponent {...props}>
      {props.children}
    </GridsComponent>
  )
}
export const Grid = (props) => {
  return (
    <GridComponent {...props}>
      {props.children}
    </GridComponent>
  )
}