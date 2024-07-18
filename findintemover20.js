const itemList = [
    {name: 'apples', qty: 10},
    {name: 'pears', qty: 37},
    {name: 'bananas', qty: 27},
    {name: 'apples', qty: 3},
];

function findItemsOver20(itemList) {
    const result = [];
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20) {
            result.push(itemList[i]);
        }
    }
    return result;
}