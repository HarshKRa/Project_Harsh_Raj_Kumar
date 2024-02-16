
// JavaScript code here
const likeImages = document.querySelectorAll('.like-image');


likeImages.forEach((likeImage) => {
  const likeDialog = likeImage.previousElementSibling;


  likeImage.addEventListener('mouseover', () => {
    likeDialog.style.display = 'block';
  });


  likeImage.addEventListener('mouseout', () => {
    likeDialog.style.display = 'none';
  });
});


var imgElement = document.getElementById("clickedImage");

var clickCount = 0;

// Function to handle click event
function handleClick() {
    clickCount++;

    clickCount %= 2;
    console.log(clickCount);
    if (clickCount == 0) {
        imgElement.src = "likes.png";
    } else {
        imgElement.src = "likesolid.png";
    }
}

imgElement.addEventListener("click", handleClick);

