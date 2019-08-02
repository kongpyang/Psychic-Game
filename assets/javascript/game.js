<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href= "assets/css/resets.css">
    <link rel="stylesheet" type="text/css" href= "assets/css/styles.css">


 <!-- Pseudo Notes -->

 <!-- Figure the html. -->

  <!-- Fiure out who is the players and veriables -->
  <!-- arrays -->
<!-- figure win by using conditions -->
   <!-- FIgure the wins1, lost2, ties3, so far4, guesses left5, who wins the game 6() -->

<!-- figure loops -->

<!-- figure funtions and alerts/ clicks -->
 
</head>

<body>


 <!-- Headline/body text -->

        
 <!-- scoreboard -->
 <h1> The Psychic Game </h1>


 <p>Guess what letter I'm thinking of!</p>
 <p>Wins:</p>
 <p>Losses:</p>
 <p>Guesses Left:</p>
 <p>Your Guesses so far:</p>

    

 <!-- Starting javacript -->

        <script type="text/javascript">
           

        var wins = 0;
        var losses = 0;
        var left = 9;
        var guesses = 9;
        var guessessofar = [];

        var usertypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        
        //I don't even know why I put another set of variable below.//

        var comptypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



        var usertypes = event.key;
        
        document.onekeyup = usertypes+function(event){
            
        var userGuess = document.getElementById("user-text");
        var computerGuess = computerChoices[Math.floor(Math.random() * comptypes.length)];


        //I cannot figure the functions of this.//

        if (usertypes.indexOf(usertypes) > -1) {
            if (comptype [
      
        }

}


</script>

</body>
</html>