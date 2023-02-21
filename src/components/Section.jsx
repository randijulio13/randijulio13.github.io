import React from 'react'

export default function Section({children, className}) {
  return (
    <section className={`${className} relative flex w-full flex-col items-center justify-center px-4`}>{children}</section>
  )
}
