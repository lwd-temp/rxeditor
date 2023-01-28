import { useCallback } from "react"
import { ActionType } from "../../actions"
import { useEditorState } from "../useEditorState"

export function useRedo() {
  const { undoList, redoList, dispatch, selected, metas } = useEditorState()
  const redo = useCallback(() => {
    const snapshot = redoList[redoList.length - 1]
    const { reactions, invokes } = snapshot
    dispatch({ type: ActionType.SELECTION, payload: snapshot.selected })
    dispatch({ type: ActionType.SET_METAS, payload: { reactions, invokes } })
    dispatch({ type: ActionType.SET_UNOLIST, payload: [...undoList,  {selected, ...metas}] })
    dispatch({ type: ActionType.SET_REDOLIST, payload: redoList.slice(0, redoList.length - 1) })
  }, [dispatch, metas, redoList, selected, undoList])

  return redo
}