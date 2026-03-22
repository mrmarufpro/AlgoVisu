export const MergeSortAnimation = (sortedArr = [], speed = 10, setTotalCountedSteps) => {
  let domBar = document.getElementsByClassName('item-bar');
  // let it = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    let isColor = i % 3 !== 2;

    if (isColor) {
      let [firstBar, secondBar] = sortedArr[i];
      let selectFirstBar = domBar[firstBar];
      let selectSecondtBar = domBar[secondBar];
      let color = i % 3 === 0 ? 'red' : 'rgb(16, 185, 129)';
      // let color = 'rgb(245, 158, 11)';
      setTimeout(() => {
        selectFirstBar.style.backgroundColor = color;
        selectSecondtBar.style.backgroundColor = color;
        setTotalCountedSteps((prevCount) => prevCount + 1);
      }, i * speed);
    } else {
      setTimeout(() => {
        let [theBar, theHeight] = sortedArr[i];
        let selectTheBar = domBar[theBar];
        selectTheBar.style.height = `${theHeight / 100}%`;
        // selectTheBar.style.backgroundColor = 'rgb(16, 185, 129)';
      }, i * speed);
      // it++;
      setTotalCountedSteps((prevCount) => prevCount + 1);
    }
  }
};
