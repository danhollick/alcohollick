import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

export default class SVGBorderBottom extends React.PureComponent {
  render() {
    return (
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,20 0,100" color="#f2c800" />
        </svg>
    );
  }
}
