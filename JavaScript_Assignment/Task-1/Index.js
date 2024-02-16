   {/* // JavaScript code here */}
   const likeImages = document.querySelectorAll('.like-img');
   const PlayImages = document.querySelectorAll('.play-img');
   const dislikeImages = document.querySelectorAll('.dislike-img');


   likeImages.forEach((likeImage) => {
     const likeDialog = likeImage.previousElementSibling;


     likeImage.addEventListener('mouseover', () => {
       likeDialog.style.display = 'block';
     });


     likeImage.addEventListener('mouseout', () => {
       likeDialog.style.display = 'none';
     });
   });


   PlayImages.forEach((likeImage) => {
    const likeDialog = likeImage.previousElementSibling;


    likeImage.addEventListener('mouseover', () => {
      likeDialog.style.display = 'block';
    });


    likeImage.addEventListener('mouseout', () => {
      likeDialog.style.display = 'none';
    });
  });


  dislikeImages.forEach((likeImage) => {
    const likeDialog = likeImage.previousElementSibling;


    likeImage.addEventListener('mouseover', () => {
      likeDialog.style.display = 'block';
    });


    likeImage.addEventListener('mouseout', () => {
      likeDialog.style.display = 'none';
    });
  });


  // like button change 

  var likebutoonChange = document.querySelector('.like-img');

  var clickCounter =0;

  function  handleClick() {
    clickCounter++;
    clickCounter %=2;
    console.log(clickCounter);

      if(clickCounter == 0){
        likebutoonChange.src = "likes.png";
      }else{
        likebutoonChange.src = "likesolid.png";
      }
  }

  likebutoonChange.addEventListener("click",handleClick);

   