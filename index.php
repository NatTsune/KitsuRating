<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Zadania</title>
        <link rel="stylesheet" href="styl.css">
    </head>
    <body>

        <img src="kitsutitle.png" alt="Nazwa strony" class="nazwapng">

        <div class="obrazy">
            <form method="POST">
            <button class="przyciskstart" type="submit" name="start">Start</button>
            </form>
            <?php
            $randomowyobraz = rand(1, 18);
            $liczbaobrazu = "obrazykitsu/kitsu" . $randomowyobraz . ".jpg";
            if (isset($_POST['start'])) {

                echo '<br><img src="' . $liczbaobrazu .'" alt="Obraz" class="losowyobraz">';
            }
            ?>

        </div>
        
        <!--<div class="losowe obrazki">
            <button class="przyciskstart" id="start">Start</button>
        </div>
        <script src="skrypt2.js"></script>-->

        
    </body>
    </html>
