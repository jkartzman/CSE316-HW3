import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that works changing items. 
 * It will be managed by the transaction stack.
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, oldItem, newItem) {
        super();
        this.store = initStore;
        this.index = index;
        this.oldItem = oldItem;
        this.newItem = newItem;
    }

    doTransaction() {
        this.store.changeItem(this.index, this.newItem);
    }
    
    undoTransaction() {
        this.store.changeItem(this.index, this.oldItem);
    }
}