fetch(`https://estate-comparison.codeboot.cz/list.php`)               // fetching data from Api
  .then((resp) => resp.json())
  .then((data) => {
    displayEstatesGallery(data);
    displayEstatesComparison(data);
  });

function displayEstatesGallery(estate) {                             //making 10 estates and showing them
  const gallery = document.querySelector("#estate_list");
  for (var i = 0; i < 10; i++) {
    const estateElm = document.createElement("div");
    estateElm.className = "gallery__item";
    estateElm.id = `gallery__estate${[i]}`;
    estateElm.innerHTML += `
                <img class="estate__img" src="${estate[i].images[1]}" alt="""></img>
                <img class="icon icon${[i]}" src="./img/circle.png" alt=""></img>
                <p class="estate__description">${estate[i].name_extracted} ${estate[i].locality}</p>
                `;
    gallery.appendChild(estateElm);
  }
  
  for (var i = 0; i < 10; i++) {                                   //border and icon toggle
    let pic = false;
  const thisPic = document.querySelector(`#gallery__estate${[i]}`)
  const thisIcon = document.querySelector(`.icon${[i]}`)
  thisPic.addEventListener('click', () =>{
    if (pic === true) {
          thisPic.style.border = "0.5rem solid rgba(94, 166, 196, 0)";
          thisIcon.style.opacity = "0";
          //console.log('hide')
          pic = false
        } else {
          thisPic.style.border = "0.5rem solid rgba(94, 166, 196, .5)";
          thisIcon.style.opacity = "0.5";
          //console.log('show')
          pic = true
        }
  })
}
}



function displayEstatesComparison(estate) {                        //making 2 main estates 
  const compare = document.querySelector("#mid_gallery");

    for (var i = 0; i < 2; i++) {
        const estateElm = document.createElement("div");
        estateElm.className = "estate"
        estateElm.id = `estate${[i]}`;
        estateElm.innerHTML += `         
        <img class="estate__img" src="${estate[i].images[1]}" alt="""></img>
        <h4 class="estate__description">${estate[i].name}</h4>
        <div class="estate__div estate__div__price${[i]}">
         <h4 class="estate__price"  ">Price</h4>
         <h4 style="font-weight: 500">${estate[i].prize_czk} Kč</h4>
         </div>
         <div class="estate__div estate__div__locality${[i]}">
         <h4 class="estate__locality">Locality </h4>
         <h4 style="font-weight: 500">${estate[i].locality}</h4>
         </div>
         <div class="estate__div estate__div__floor${[i]}">
         <h4 class="estate__floor">Floor area</h4>
         <h4 style="font-weight: 500">${estate[i].building_area}m²</h4>
         </div>
         <div class="estate__div estate__div__land${[i]}">
         <h4 class="estate__land">Land area</h4>
         <h4 style="font-weight: 500">${estate[i].land_area}m²</h4>
         </div>
          <div class="realtor">
            <img class="estate__logo" src="${estate[i].company_logo}" alt=""">${estate[i].company_name}</img>
          </div>
         `;    
        compare.appendChild(estateElm);
    }   
        i = 0
        if (Number(`${estate[i].prize_czk}` > `${estate[i+1].prize_czk}`)) {           //comparing price
         var d0 = document.getElementById("estate0").childNodes;
         d0[5].style.background= "#7EDA7E";
         var d1 = document.getElementById("estate1").childNodes;
          d1[5].style.background= "#F09191";
        }
        else {
          var d0 = document.getElementById("estate0").childNodes;
          d0[5].style.background= "#F09191";
          var d1 = document.getElementById("estate1").childNodes;
          d1[5].style.background= "#7EDA7E";
        }

        if (Number(`${estate[i].building_area}` < `${estate[i+1].building_area}`)) {  //comparing building area
          var d0 = document.getElementById("estate0").childNodes;
         d0[9].style.background= "#7EDA7E";
         var d1 = document.getElementById("estate1").childNodes;
          d1[9].style.background= "#F09191";
        }
        else {
          var d0 = document.getElementById("estate0").childNodes;
          d0[9].style.background= "#F09191";
          var d1 = document.getElementById("estate1").childNodes;
          d1[9].style.background= "#7EDA7E";
         }

         if (Number(`${estate[i].land_area}` > `${estate[i+1].land_area}`)) {        //comparing land area
          var d0 = document.getElementById("estate0").childNodes;
         d0[11].style.background= "#7EDA7E";
         var d1 = document.getElementById("estate1").childNodes;
          d1[11].style.background= "#F09191";
        }
        else {
          var d0 = document.getElementById("estate0").childNodes;
          d0[11].style.background= "#F09191";
          var d1 = document.getElementById("estate1").childNodes;
          d1[11].style.background= "#7EDA7E";
         }  
    }

