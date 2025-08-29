const container = document.querySelector('.container');
const btn = document.getElementById('changeColorBtn');


const pastelColors = [
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
    "#E0BBE4", "#FFDFD3", "#FFC4E1", "#FFECB3", "#D5F4E6",
    "#C5CAE9", "#B2EBF2", "#F8BBD0", "#DCEDC8", "#F0F4C3",
    "#D1C4E9", "#F3E5F5", "#FFCCBC", "#C8E6C9", "#FFCDD2",
    "#E6EE9C", "#FFF9C4", "#FFE0B2", "#FFAB91", "#CE93D8",
    "#90CAF9", "#A5D6A7", "#80CBC4", "#F48FB1", "#FFCC80"
];

let index = 0;

btn.addEventListener('click', () => {
    container.style.backgroundColor = pastelColors[index];
    index = (index + 1) % pastelColors.length; 
});
