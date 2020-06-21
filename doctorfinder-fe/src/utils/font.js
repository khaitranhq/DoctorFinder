const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const font = new FontFaceObserver("Roboto Slab");

  font.load().then(() => {
    document.getElementById("lds-ripple").classList.add("hidden");
    document.getElementById("wrapper").classList.add("font-loaded");
  });
};

export default Fonts;
