const nav = document.getElementById("nav");

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth;

  nav.animate(
    {
      transform: `translate(${percent * nav.offsetWidth * -1}px)`,
    },
    {
      fill: "forwards",
      duraiton: 4000,
    }
  );
};
