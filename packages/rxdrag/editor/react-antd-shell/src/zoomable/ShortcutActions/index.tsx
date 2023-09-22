import { Button, Space } from "antd"
import { memo, useCallback, useMemo, useState } from "react"
import styled from "styled-components"
import { AimOutlined, FileAddOutlined, HistoryOutlined, SaveOutlined } from "@ant-design/icons"
import { usePropertyWidthState } from "../contexts"
import { ZoomButtons } from "./ZoomButtons"
import { CanvasFloatButton } from "../common/FloatButton"
import { OperationHistory, OutlineTree, SvgIcon } from "../../common"
import { outlineIcon } from "../../icons"
import { DEFAULT_MARGIN } from "../consts"
import { ExpandPanel } from "./ExpandPanel"
import { useSettersTranslate } from "@rxdrag/react-core"
import { WidgetTitle } from "../common/WidgetTitle"

const Container = styled.div`
  position: absolute;
  top: ${DEFAULT_MARGIN}px;
  right: 400px;
  display: flex;
  flex-flow: column;
  transition: all 0.3s;
  height: calc(100% - ${2 * DEFAULT_MARGIN}px);
  pointer-events: none;
`

const RelativeInner = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 0;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
`

const StyledButton = styled(CanvasFloatButton)`
  background-color: ${props => props.theme.token?.colorBgBase};
`

const StyleSpace = styled(Space)`
  pointer-events: all;
`

const ButtonContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  .ant-btn{
    background-color: ${props => props.theme.token?.colorBgBase};
  }
`
export const SaveButton = styled(Button)`
  box-shadow: ${props => props.theme.mode === "dark" ? "2px 2px 8px 4px #13386c" : "1px 1px 6px 1px #6e95cc"};
  border: solid 1px ${props => props.theme.token?.colorPrimary};
`;

export const ShortcutActions = memo((
  props: {
    scrolled?: boolean,
    zoom: number,
    onZoomChange: (zoom: number) => void
    onResetScroll: () => void,
  }
) => {
  const { scrolled, zoom, onZoomChange, onResetScroll } = props

  const [outlineOpen, setOutlineOpen] = useState<boolean>()
  const [historyOpen, setHistoryOpen] = useState<boolean>()
  const [propertyWidth] = usePropertyWidthState()
  const t = useSettersTranslate()
  const collapsed = useMemo(() => !outlineOpen && !historyOpen, [historyOpen, outlineOpen])

  const handleToggleOutlineOpen = useCallback(() => {
    setHistoryOpen(false)
    setOutlineOpen(open => !open)
  }, [])

  const handleToggleHistoryOpen = useCallback(() => {
    setOutlineOpen(false)
    setHistoryOpen(open => !open)
  }, [])

  const handleCloseExpand = useCallback(() => {
    setOutlineOpen(false)
    setHistoryOpen(false)
  }, [])

  return (
    <Container
      className="rx-shortcut-actions"
      style={{
        right: propertyWidth + 24
      }}
    >
      <RelativeInner>
        <ExpandPanel collapsed={collapsed}>
          {outlineOpen &&
            <>
              <WidgetTitle
                title={t("outline")}
                onClose={handleCloseExpand}
              />
              <Content>
                <OutlineTree />
              </Content>
            </>
          }

          {
            historyOpen && <>
              <WidgetTitle
                title={t("history")}
                onClose={handleCloseExpand}
              />
              <Content>
                <OperationHistory />
              </Content>
            </>
          }

        </ExpandPanel>
        <StyleSpace direction="vertical">
          <SaveButton type="primary" icon={<SaveOutlined />} />
          <CanvasFloatButton icon={<FileAddOutlined />} />
          <ZoomButtons zoom={zoom} onZoomChange={onZoomChange} />
          <StyledButton
            type={outlineOpen ? "link" : undefined}
            icon={<SvgIcon>
              {outlineIcon}
            </SvgIcon>}
            onClick={handleToggleOutlineOpen}
          />
          <StyledButton
            type={historyOpen ? "link" : undefined}
            icon={<HistoryOutlined />}
            onClick={handleToggleHistoryOpen}
          />
          <ButtonContainer>
            <CanvasFloatButton disabled={!scrolled} icon={<AimOutlined />} onClick={onResetScroll} />
          </ButtonContainer>
        </StyleSpace>
      </RelativeInner>
    </Container>
  )
})