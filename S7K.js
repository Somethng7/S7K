var i = 0;
var txt1 =
  "Hi Kutty.....!  <<               Wishing you the happiest of birthdays today! 🎂🎈 I hope your day is filled with all the joy and excitement you deserve.  <<               Now I want to say something special to you. <<<                So , Please read everything carefully jolie fille...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                 I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!😍                     << I am somewhat nervous Because I dont know how to describe how I feel about you, I cant express that in words...!❤️                                                     > I will never be able to love anyone the way I loved you!💕                     <<No matter wherever I am, or whatever I have, you will always be in my heart....!💖                                                             >Love u, miss u <Gopika Madam garu.....! |                  <<<< I am waiting for see you and be with you...!   by untoldcoding";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
