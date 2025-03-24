import React from 'react'

export default function CustomToolTip({active,payload}) {
  if(active && payload && payload.length){
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-purple-800  mb-1">{payload[0].payload.name}</p>
        <span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
      </div>
    )
  }
  return null;
}
