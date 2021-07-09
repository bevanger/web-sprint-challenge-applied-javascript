import { javascript } from "webpack";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div');
  const tab1Div = document.createElement('div');
  const tab2Div = document.createElement('div');
  const tab3Div = document.createElement('div');

  topicsDiv.appendChild(tab1Div);
  topicsDiv.appendChild(tab2Div);
  topicsDiv.appendChild(tab3Div);

  topicsDiv.classList.add('topics');
  tab1Div.classList.add('tab');
  tab2Div.classList.add('tab');
  tab3Div.classList.add('tab');

  tab1Div.textContent = 'javascript';
  tab2Div.textContent = 'bootstrap';
  tab3Div.textContent = 'technology';

  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
