'use strict';

const handleValue = () => {
  console.log(document.querySelector('.guess').value);
};

document.querySelector('.check').addEventListener(
  'click',
  // handleValue or
  function () {
    console.log(document.querySelector('.guess').value);
  }
);
