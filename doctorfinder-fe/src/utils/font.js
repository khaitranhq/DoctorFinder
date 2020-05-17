const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Orbitron|Roboto+Slab&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const font = new FontFaceObserver("Roboto Slab");

  font.load().then(() => {
    document.getElementById("lds-ripple").classList.add("hidden");
    document.getElementById("wrapper").classList.add("font-loaded");
  });
};

export default Fonts;
