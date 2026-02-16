async function loaddovednosti() {
  const response = await fetch('/dovednosti');
  const names = await response.json();

  console.log(dovednosti); 


}

async function loadzajmy() {
  const response = await fetch('/zájmy');
  const names = await response.json();

  console.log(zájmy); 

}

loaddovednosti();
loadzajmy();
