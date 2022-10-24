{
  console.log("Dzień dobry, deweloperzy!");

  const onChangeBackgroundClick =
    ("click",
    () => {
      const colorNameText = document.querySelector(".js-colorNameText");
      const body = document.querySelector(".body");

      body.classList.toggle("dark");
      colorNameText.innerText = body.classList.contains("dark")
        ? "ciemne"
        : "jasne";
    });

  const changeBackgorundButton = document.querySelector(
    ".js-changeBackgroundButton"
  );
  changeBackgorundButton.addEventListener("click", onChangeBackgroundClick);
}
