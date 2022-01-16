import React from 'react'

import {SpinnerContainer, SpinnerOverLay} from './with-spinner-style.jsx'

const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading}) => {
    return isLoading ? 
      <SpinnerOverLay>
        <SpinnerContainer />
    </SpinnerOverLay>
    : 
    <WrappedComponent />

  }
  return Spinner
}

export default WithSpinner
