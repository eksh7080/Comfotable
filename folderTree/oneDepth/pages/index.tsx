import styled from "@emotion/styled"
import Link from "next/link"


const Nav = styled.section`
  max-width: 100%
`

export default function Home() {
  return (
    <Nav>
      <Link href='one'>원 뎁스</Link>
   </Nav>
  )
}
