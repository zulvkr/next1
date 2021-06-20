import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Relink = ({ href, children, as }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link as={as} href={href}>{React.cloneElement(children, { className })}</Link>
}

export default Relink
