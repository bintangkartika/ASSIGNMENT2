function submitForm() {
    event.preventDefault();

    const inputName = document.getElementById("input-name").value;
    document.getElementById("name").innerText = inputName;

    const inputTitle = document.getElementById("input-title").value;
    document.getElementById("title").innerText = inputTitle;

    const inputAvailability = document.getElementById("input-availability").value;
    document.getElementById("availability").innerText = inputAvailability;

    const inputUsia = document.getElementById("input-usia").value;
    document.getElementById("usia").innerText = inputUsia;

    const inputLokasi = document.getElementById("input-lokasi").value;
    document.getElementById("lokasi").innerText = inputLokasi;

    const inputPengalaman = document.getElementById("input-pengalaman").value;
    document.getElementById("pengalaman").innerText = inputPengalaman;

    const inputEmail = document.getElementById("input-email").value;
    document.getElementById("email").innerText = inputEmail;
  }
