const game = ()=> {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const indroScreen = document.querySelector(".intro");
    const match = document.querySelector(".match")

    playBtn.addEventListener("click", () => {
     indroScreen.classList.add("fadeOut");
    });

  };

  startGame();
};

game();