"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_juta_1 = require("jec-juta");
class TestSorterUtil {
    constructor() { }
    nameAscendingSorter(a, b) {
        const aVal = a.name;
        const bVal = b.name;
        if (aVal < bVal)
            return -1;
        if (aVal > bVal)
            return 1;
        return 0;
    }
    nameDescendingSorter(a, b) {
        const aVal = a.name;
        const bVal = b.name;
        if (aVal > bVal)
            return -1;
        if (aVal < bVal)
            return 1;
        return 0;
    }
    orderDescendingSorter(a, b) {
        const aVal = a.order;
        const bVal = b.order;
        if (aVal > bVal)
            return -1;
        if (aVal < bVal)
            return 1;
        return 0;
    }
    orderAscendingSorter(a, b) {
        const aVal = a.order;
        const bVal = b.order;
        if (aVal < bVal)
            return -1;
        if (aVal > bVal)
            return 1;
        return 0;
    }
    sort(methods, sortBy) {
        let sortMethod = null;
        switch (sortBy) {
            case jec_juta_1.TestSorters.NAME_ASCENDING:
                sortMethod = this.nameAscendingSorter;
                break;
            case jec_juta_1.TestSorters.NAME_DESCENDING:
                sortMethod = this.nameDescendingSorter;
                break;
            case jec_juta_1.TestSorters.ORDER_ASCENDING:
                sortMethod = this.orderAscendingSorter;
                break;
            case jec_juta_1.TestSorters.ORDER_DESCENDING:
                sortMethod = this.orderDescendingSorter;
                break;
            case jec_juta_1.TestSorters.DEFAULT:
            default:
        }
        if (sortMethod) {
            methods.sort(sortMethod);
        }
    }
}
exports.TestSorterUtil = TestSorterUtil;
;
