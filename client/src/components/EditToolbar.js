import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();
    let undoClass = "top5-button";
    let redoClass = "top5-button";
    let closeClass = "top5-button";
    if (!store.hasTransactionToUndo()) {
        undoClass = "top5-button-disabled";
    }
    if (!store.hasTransactionToRedo()) {
        redoClass = "top5-button-disabled";
    }
    if (!store.currentList) {
        closeClass = "top5-button-disabled";
    }
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let editStatus = store.isListNameEditActive || store.isItemEditActive;
    if (editStatus) {
        undoClass = "top5-button-disabled";
        redoClass = "top5-button-disabled";
        closeClass = "top5-button-disabled";
    }
    return (
        <div id="edit-toolbar">
            <div
                disabled={editStatus}
                id='undo-button'
                onClick={handleUndo}
                className={undoClass}>
                &#x21B6;
            </div>
            <div
                disabled={editStatus}
                id='redo-button'
                onClick={handleRedo}
                className={redoClass}>
                &#x21B7;
            </div>
            <div
                disabled={editStatus}
                id='close-button'
                onClick={handleClose}
                className={closeClass}>
                &#x24E7;
            </div>
        </div>
    )
}

export default EditToolbar;