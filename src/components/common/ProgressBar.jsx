import React from 'react'


const ProgressBar = ({ bgcolor, progress, height }) => {
	const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
	}
	 const progresstext = {
        color: 'black',
        fontWeight: 400,
        textAlign: 'center'
      }
  return (
	<div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar