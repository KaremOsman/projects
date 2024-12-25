var paragraph = [
  `You know you're in love when you can't fall asleep because reality is finally better than your dreams.
<br> -- Dr. Seuss`,
  `You only live once, but if you do it right, once is enough.<br> -- Mae West2`,
  `Be the change that you wish to see in the world.<br> -- Mahatma Gandhi`,
  `In three words I can sum up everything I've learned about goes on.<br> -- Robert Frost`,
  `If you tell the truth, you don't have to remember anything.<br> -- Mark Twain`,
  `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .
<br> -- C.S. Lewis, The Four Loves`,
  `Always forgive your enemies; nothing annoys them so much.<br> -- Oscar Wilde`,
  `Live as if you were to die tomorrow. Learn as if you were to live forever.<br> -- Mahatma Gandhi`,
  `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.
<br> -- Ralph Waldo Emerson`
]



function button() {
  var num = Math.floor(Math.random() * paragraph.length);
  document.getElementById("p").innerHTML = `<p class="  mx-auto mt-5  ">  
    ${paragraph[num]}
    </p>`
}

