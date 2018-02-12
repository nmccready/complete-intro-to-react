import React from 'react';
import { connect } from 'react-redux';

/* eslint-disable */

export function Crap({ onCrap }) {
  return (
    <div className="crap">
      <button type="button" onClick={onCrap}>Crap</button>
    </div>
  );
}

export default connect(
  state => ({
    crap: true
  }),
  dispatch => ({
    onCrap: event => console.log('crap')
  })
)(Crap);
