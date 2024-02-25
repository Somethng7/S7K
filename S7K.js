var i = 0;
var txt1 =
  "Hi Kutty.....!🤗  <<               Wishing you the happiest birthday to someone who makes my heart skip a beat! 🎂🎈.  <<               May your smile bright be just like a sun shines everyday.👼🏻💫<<                Your smile makes me happiest one, Magical smile...🥰                <<<                You are like a choclate sweet, filled my days with sweetness and  made every moment delightful. <                Always be happy jolie fille...!😉                                                                           > When I saw you for the first time < You seems something Special to me.💫🕊️  <<                 You are like a rose, just like a rose stand out among the other flowers... Unique...🌟!                                                     > Everything about you is always intresting for me...!😍                                                     <<                Delightful combination of strawberries and cream, its sweet and adds a special flavor.<                Just like strawberry and cream go hand in hand, our bond is sweetest one. Thank you for giving sweet memories kutty...!❤️                                                     << From the day I saw you my world has been full of you!💕                                                     < Now Im missing your magical sparkles and Everything...!🪄                     <<No matter wherever I am, or whatever I am doing, you will always be in my thoughts and my heart....!💖                                                             >Missing u a lot, Love you <Gopika Madam garu.....!💖🤗😘 |                  <<<< See you soon...!👀     ";
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
