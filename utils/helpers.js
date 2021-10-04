module.exports = {
  // TODO: REPLACE SAMPLE HELPER FUNCTION
  get_emoji: () => {
    const randomNum = Math.random();
    let book = '📗';

    if (randomNum > 0.7) {
      book = '📘';
    } else if (randomNum > 0.4) {
      book = '📙';
    }

    return `<span for='img' aria-label='book'>${book}</span>`;
  },
  if_first: (index) => {
    console.log(index);
    return (index === 0) ? true : false;
  }
};
