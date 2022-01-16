import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectDirectoryData } from '../../redux/directory/directory-selector.js'

import MenuItem from '../menu-item/menu-item.jsx'
import './directory.scss'

const Directory = ({ directoryData }) => {
  return (
    <div className='directory-menu'>
      {directoryData.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  directoryData: selectDirectoryData
})

export default connect(mapStateToProps)(Directory)
