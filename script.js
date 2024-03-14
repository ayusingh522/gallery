// Sample data for love letters and photos
const loveLetters = ["Dear Beloved❤️, I just wanted to let you know how much I love you.. and haw much imp for me🌸💐.", "My dearest NAGGO🍁🌼 LIL BITES❤️, every  your tasavir is a treasure...Every photo of yours that you send me is like a precious💎💎 treasure✨ to me. Which works as a dose😚 for me. Which is important for me for my breath❤️"];
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "77.jpg" ,"78.jpg" ,"34.jpg","35.jpg", "35.jpg","36.jpg" ,"37.jpg","38.jpg","39.jpg","40.jpg","41.jpg","43.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg" , "54.jpg", "55.jpg", "56.jpg" , "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg","a1.jpg", "a2.png", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg","a8.jpg", "a9.jpg", "a10.jpg", "a11.jpg","a12.jpg","a13.jpg","a14.jpg","a16.jpg","a17.jpg","a18.jpg","a19.jpg","a20.jpg","a21.jpg","a22.jpg","a23.jpg","a24.jpg","a25.jpg","a26.jpg","a27.jpg","a28.jpg","a29.jpg","a31.jpg","a32.jpg","a33.jpg","s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg","s6.jpg","s7.jpg","s8.jpg","s9.jpg","s10.jpg","s11.jpg","s12.jpg","s13.jpg","s14.png", ];

// Function to dynamically add love letters to the page
function displayLoveLetters() {
  const letterContainer = document.getElementById("letterContainer");
  loveLetters.forEach(letter => {
    const div = document.createElement("div");
    div.classList.add("loveLetter");
    div.textContent = letter;
    letterContainer.appendChild(div);
  });
}

// Function to dynamically add photos to the page
function displayPhotos() {
  const photoContainer = document.getElementById("photoContainer");
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = photo;
    photoContainer.appendChild(img);
  });
}

// Call functions to display love letters and photos when the page loads
document.addEventListener("DOMContentLoaded", function() {
  displayLoveLetters();
  displayPhotos();
});
