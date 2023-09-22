import { IDesignerEngine, IDocument } from "@rxdrag/core";
import { useCallback, useEffect, useState } from "react"
import { memo } from "react"
import { ID } from "@rxdrag/shared";
import { EVENT_DOC_CHANGE, EVENT_IFRAME_READY } from "./IframeProxy/constants";
import { DesignerEngineContext, DocumentRoot, InIframeContext, Scroller } from "..";
import { IReactComponents } from "@rxdrag/react-shared";
import { ComponentDesignersRoot } from "../ComponentDesignersRoot";
import { Fieldy } from "@rxdrag/react-fieldy";
declare const window: Window & { engine?: IDesignerEngine, doc?: IDocument };

export interface IFrameCanvasEvent {
  name: string,
  payload?: ID,
}

//尽量放在Ifame的顶层
export const CanvasProxy = memo((
  props: {
    components: IReactComponents
    children?: React.ReactNode,
  }
) => {
  const { components, children } = props;
  const [engine, setEngine] = useState<IDesignerEngine>()
  const [doc, setDoc] = useState<IDocument>()
  const receiveMessageFromParent = useCallback((event: MessageEvent<IFrameCanvasEvent>) => {
    // 监听父窗口 ready 事件
    if (event.data?.name === EVENT_IFRAME_READY) {
      console.log('RXDrag: iframeReady');
      setEngine(window.engine);
    }
    if (event.data?.name === EVENT_DOC_CHANGE) {
      setDoc(window.doc)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', receiveMessageFromParent, false);
    return () => {
      window.removeEventListener('message', receiveMessageFromParent)
    }
  }, [receiveMessageFromParent])

  return (
    doc
      ? <Fieldy>
        <InIframeContext.Provider value={true}>
          <DesignerEngineContext.Provider value={engine}>
            <ComponentDesignersRoot components={components}>
              <DocumentRoot doc={doc}>
                {engine ? children : <></>}
                <Scroller />
              </DocumentRoot>
            </ComponentDesignersRoot>
          </DesignerEngineContext.Provider>
        </InIframeContext.Provider>
      </Fieldy>
      : <></>
  )
})