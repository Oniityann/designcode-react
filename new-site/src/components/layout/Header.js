import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuToolTip from "../tooltips/MenuToolTip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Link to="/index">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <button onClick={() => setIsOpen(!isOpen)}>Account</button>
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuToolTip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;
`
