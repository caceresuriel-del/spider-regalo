const intro = document.getElementById("intro");
const passwordScreen = document.getElementById("passwordScreen");
const giftScreen = document.getElementById("giftScreen");

const startBtn = document.getElementById("startBtn");
const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("passwordInput");
const error = document.getElementById("error");


/* =====================================================
   INTRO → CONTRASEÑA
===================================================== */

startBtn.addEventListener("click", () => {

  intro.classList.remove("active");

  passwordScreen.classList.add("active");

  passwordInput.focus();

});


/* =====================================================
   CONTRASEÑA
===================================================== */

function checkPassword() {

  const password =
    passwordInput.value.trim();


  if (password === "pitufidupla") {

    error.textContent = "";

    error.classList.remove("anomaly");

    passwordScreen.classList.remove(
      "anomaly-active"
    );

    passwordScreen.classList.remove(
      "screen-glitch"
    );

    passwordScreen.classList.add(
      "transitioning"
    );


    setTimeout(() => {

      passwordScreen.classList.remove(
        "active"
      );

      passwordScreen.classList.remove(
        "transitioning"
      );

      giftScreen.classList.add(
        "active"
      );

    }, 1200);


  } else {

    error.textContent =
      "⚠ ANOMALÍA DETECTADA";

    error.classList.remove("anomaly");

    passwordScreen.classList.remove(
      "anomaly-active"
    );

    passwordScreen.classList.remove(
      "screen-glitch"
    );

    void passwordScreen.offsetWidth;

    passwordScreen.classList.add(
      "anomaly-active"
    );

    passwordScreen.classList.add(
      "screen-glitch"
    );

    error.classList.add(
      "anomaly"
    );

    passwordInput.value = "";


    passwordInput.animate(
      [
        {
          transform: "translateX(0)"
        },
        {
          transform: "translateX(-12px)"
        },
        {
          transform: "translateX(12px)"
        },
        {
          transform: "translateX(-8px)"
        },
        {
          transform: "translateX(8px)"
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 500,
        easing: "steps(2, end)"
      }
    );


    setTimeout(() => {

      passwordScreen.classList.remove(
        "anomaly-active"
      );

      passwordScreen.classList.remove(
        "screen-glitch"
      );

    }, 1300);

  }

}


unlockBtn.addEventListener(
  "click",
  checkPassword
);


passwordInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      checkPassword();

    }

  }
);


/* =====================================================
   SPIDEY TRACKER
===================================================== */

document.addEventListener("click", (event) => {


  if (
    event.target.closest(
      "#spideyTrackerBtn"
    )
  ) {

    const tracker =
      document.getElementById(
        "spideyTracker"
      );

    const status =
      document.getElementById(
        "trackerStatus"
      );

    const result =
      document.getElementById(
        "trackerResult"
      );


    if (!tracker) return;


    tracker.classList.add(
      "active"
    );


    if (status) {

      status.textContent =
        "BUSCANDO SEÑAL DE SPIDER-MAN...";

    }


    if (result) {

      result.classList.remove(
        "show"
      );

    }


    setTimeout(() => {

      if (status) {

        status.textContent =
          "SEÑAL ENCONTRADA...";

      }


      setTimeout(() => {

        if (result) {

          result.classList.add(
            "show"
          );

        }

      }, 500);

    }, 1200);

  }


  if (
    event.target.closest(
      "#closeTracker"
    )
  ) {

    const tracker =
      document.getElementById(
        "spideyTracker"
      );

    const result =
      document.getElementById(
        "trackerResult"
      );


    if (tracker) {

      tracker.classList.remove(
        "active"
      );

    }


    if (result) {

      result.classList.remove(
        "show"
      );

    }

  }


  /* =================================================
     FOTOS AMPLIABLES
  ================================================= */

  const photo =
    event.target.closest(
      ".memory-panel"
    );


  if (photo) {

    const background =
      document.querySelector(
        ".spiderverse-bg"
      );


    const alreadyZoomed =
      photo.classList.contains(
        "zoomed"
      );


    document
      .querySelectorAll(
        ".memory-panel.zoomed"
      )
      .forEach(
        (otherPhoto) => {

          otherPhoto.classList.remove(
            "zoomed"
          );

        }
      );


    if (!alreadyZoomed) {

      photo.classList.add(
        "zoomed"
      );


      if (background) {

        background.classList.add(
          "photo-open"
        );

      }

    } else {

      if (background) {

        background.classList.remove(
          "photo-open"
        );

      }

    }


    return;

  }


  /* =================================================
     TOCAR AFUERA → CERRAR FOTO
  ================================================= */

  const zoomedPhoto =
    document.querySelector(
      ".memory-panel.zoomed"
    );


  if (zoomedPhoto) {

    zoomedPhoto.classList.remove(
      "zoomed"
    );

  }


  const background =
    document.querySelector(
      ".spiderverse-bg"
    );


  if (background) {

    background.classList.remove(
      "photo-open"
    );

  }

});
