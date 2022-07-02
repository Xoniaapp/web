import { MenuList } from "@chakra-ui/react"
import React from "react"

/* @ts-ignore */
export const StyledMenuList: React.FC = ({ children }) => (
  <MenuList bg="brandGray.darkest" px="2">
    {children}
  </MenuList>
)
