
const profilDiv = document.getElementById("profile");
 

fetch("./profile.json")
  .then(response => {
    // kontrola
    if (!response.ok) {
      throw new Error("Nepodařilo se načíst profile.json");
    }
    return response.json();
  })
  .then(data => {
    profilDiv.innerHTML = `
      <h2>${data.name}</h2>
 
      <p><strong>Zájmy:</strong></p>
      <ul>
        ${data.zájmy.map(zajem => `<li>${zajem}</li>`).join("")}
      </ul>
 
      <p><strong>Dovednosti:</strong></p>
      <ul>
        ${data.dovednosti.map(dovednost => `<li>${dovednost}</li>`).join("")}
      </ul>
    `;
  })
  .catch(err => {
    console.error("Chyba:", err);
    profilDiv.innerHTML = `
      <p class="error">Profil nenacten</p>
      <p>Zkus zkontrolovat, jestli soubor profil.json existuje ve stejné složce.</p>
    `;
  });