import React from 'react'

type BadgeProps = {
    title: string;
    icon?: string;    
    variant?: string
}

const Badge = ({ title, icon, variant}: BadgeProps) => {
  return (
    <div className={`bg-primary outline outline-1 2xl:outline-offset-4 outline-offset-2 outline-primary  rounded-md font-semibold uppercase ${variant}`}>
        {title}
    </div>
  )
}

export default Badge