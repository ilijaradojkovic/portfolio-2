import React from 'react'
import './ClickHint.scss'
export default function ClickHint({top, left}) {
  return (
    <div className='click-hint-wrapper' style={{top: top, left: left}}>
            CLICK
    </div>
  )
}
