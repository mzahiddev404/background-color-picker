// --------------------------
// Old version (manual functions)
// --------------------------
// event listener; smurfs sitting & waiting for click here to run the function
// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('orange').onclick = partyOrange


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyOrange() {
//   document.body.style.backgroundColor = '#f39c12';
//   document.body.style.color = 'white';
// }
// --------------------------
// or can accomplish it all with this shorter code below
// --------------------------


// ==============================
// BACKGROUND COLOR PICKER LOGIC
// ==============================

// Define button IDs with corresponding background colors
const colorMap = {
  purple: 'rgba(241,63,247,1)',
  green: 'rgba(0,253,81,1)',
  blue: 'rgba(0,254,255)',
  orange: '#f39c12'
}

// Loop through each color and apply click event to set background
for (const [id, color] of Object.entries(colorMap)) {
  document.getElementById(id).addEventListener('click', () => {
    document.body.style.backgroundColor = color
    document.body.style.color = 'white'
  })
}

// Reset button restores default white background + black text
document.getElementById('reset').addEventListener('click', () => {
  document.body.style.backgroundColor = '#ffffff'
  document.body.style.color = 'black'
})
