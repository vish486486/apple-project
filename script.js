/* 
1) navbar > ul > (select)
2) addeventlistner mouseover, if hover then>
3) classList()
if mouseout then remove.classList();
*/

const hoverStore = document.querySelector('.store');
const takingHiddenContent = document.querySelector('.hide-content');

hoverStore.addEventListener('click', ()=> {
    takingHiddenContent.classList.toggle('show-content');
});
