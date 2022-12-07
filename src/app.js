const getOrderedList = (stringList, string) => {
  if (!Array.isArray(stringList)) {
    throw new Error('First argument should be an array of strings');
  }
  if (typeof string !== 'string') {
    throw new Error('Second argument should be a string');
  }

  const listArray = [];

  stringList.forEach((element) => {
    const elementRegex = new RegExp(element, 'i');

    const matchedElement = elementRegex.exec(string);
    if (!matchedElement) {
      return;
    }

    const verifiUniqeuPosition = listArray.filter(
      (item) => item.position === matchedElement.index
    );
    if (verifiUniqeuPosition.length) {
      return;
    }

    const elementObject = {
      position: matchedElement.index,
      value: matchedElement[0],
    };

    listArray.push(elementObject);
  });

  return listArray
    .sort((a, b) => a.position - b.position)
    .map((item) => item.value);
};

module.exports = { getOrderedList };
