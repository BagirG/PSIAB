(function () {
  const Bahasa = {
    indonesia: {
      iniabout: "Kamu siapa",
    },
    english: {
      iniabout: "Test aja",
    },
  };

  let lang = "indonesia";

  const tampilkanbahasa = (lang) => {
    let hasil = Bahasa[indonesia];
    const contentBefore = document.querySelector("container");
    if (contentBefore) contentBefore.remove();

    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
    <div class="container">
    <div class="iniabout">testlahsss
    </div>
  </div>`;

    document.body.appendChild(container);
  };
  tampilkanbahasa();
})();
