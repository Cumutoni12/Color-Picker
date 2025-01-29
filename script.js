const colorPicker = document.querySelector("#color-picker");
const heading = document.querySelector("#heading");
const paragraph = document.querySelector("#paragraph");

colorPicker.addEventListener("input", (e) => {
  // get Selected Color
  const selectedColor = e.target.value;
  //   apply the color to the heading and paragraph
  heading.style.color = selectedColor;
  paragraph.style.color = selectedColor;
});
