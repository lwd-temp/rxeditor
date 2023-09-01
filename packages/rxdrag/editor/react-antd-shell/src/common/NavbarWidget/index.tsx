import React, { CSSProperties, memo } from "react"
import cls from "classnames"
import { NodeTag } from "./NodeTag";
import styled from "styled-components";
import { useNodesOnPath } from "./useNodesOnPath";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  font-size: 13px;
  .one-node{
    user-select: none;
    cursor: pointer;
    padding-left: 7px;
    display: flex;
    align-items: center;
    .node-label{
      display: flex;
      align-items: center;
      padding-right: 7px;
    }
  }
  border-top: ${props => props.theme?.token?.colorBorder} solid 1px;
  color: ${props => props.theme?.token?.colorText};
`
export const NavbarWidget = memo((
  props: {
    className?: string,
    style?: CSSProperties,
    children?: React.ReactNode
  }
) => {
  const { className, ...other } = props;
  const nodes = useNodesOnPath()

  return (
    <Container className={cls("rx-editor-navbar", className)} {...other}>
      {
        nodes.map(node => {
          return <NodeTag key={node.id} node={node} />
        })
      }
    </Container>
  )
})