<!DOCTYPE html>
<html lang="Fr">

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
  <!-- POLICE LINK RALEWAY (text) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, inial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />

  <title>l' équipe PHP</title>
</head>

<body>
  <nav>
    <button class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li>
        <a class="nav-link accueil" href="Page1.html">A propos de nous</a>
      </li>
      <li><a class="nav-link a-propos" href="php.php">L'équipe PHP</a></li>
      <li>
        <a class="nav-link contact" href="Rejoins-nous.html">Nous contacter</a>
      </li>
    </ul>
  </nav>
  <header>
    <h1>Team PHP</h1>
  </header>

  <div class="JFF">
    <img class="JF" src="/images/JF.jpg" alt="formateur" />
  </div>
  <div class="JF_container">
    <section class="JF_popup">
      <div>
        <img class="JFDansPopup" src="/images/JF.jpg" alt="formateur" />
      </div>
      <div class="JF_description">
        <p class="titreJF">Jean-François MORIN</p>
        <p class="petitTitreJF">Le formateur !</p>
        <p class="emailJF">JFMorin@gmail.com</p>
        <p>Jean-François, c'est le genre de prénom qui évoque le sérieux, la rigueur et le professionnalisme. On imagine un homme d'affaires respecté et expérimenté. Mais peut-être cache-t-il un côté un peu plus excentrique et surprenant que l'on ne soupçonne pas au premier abord ?</p>
      </div>
    </section>
  </div>

  <div class="galerie">
    <?php
    include 'data.php';
    foreach ($wilders as $wilder) : ?>
      <div>
        <img class="Wilder" src="/images/<?php echo $wilder['image'] ?>" alt=<?php echo $wilder['prenom'] ?> />
      </div>
      <div class="Wilder_container">
        <section class="Wilder_popup">
          <button class="nav-button prev-button">&lt;</button>
          <button class="nav-button next-button">&gt;</button>
          <div>
            <img class="WilderDansPopup" src="/images/<?php echo $wilder['image'] ?>" alt=<?php echo $wilder['prenom'] ?> />
          </div>
          <div class="Wilder_description">
            <h2 class="titreWilder"><?php echo $wilder['prenom'] ?> <br> <?php echo $wilder['nom'] ?></h2>
            <p class="petitTitreWilder"><?php echo $wilder['petitTitre'] ?></p>
            <p class="emailWilder"><?php echo $wilder['email'] ?></p>
            <p class="descriptionWilder"><?php echo $wilder['description'] ?></p>

          </div>
        </section>

      </div>
    <?php endforeach; ?>
  </div>


  <div class="button">
    <a href="#" class="btn btn-primary">Haut ↑</a>
  </div>

  <footer>Copyright © 2023 TEAMPHP, Inc.</footer>

  <script src="popupscript.js"></script>
  <script src="script.js"></script>
  <script src="scriptphoto.js"></script>
  <script src="jfscript.js"></script>
</body>

</html>