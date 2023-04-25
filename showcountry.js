const theme_toggle = document.querySelector(".dark_mode");


let params = new URLSearchParams(window.location.search);
country = JSON.parse(params.get("country"));
showCountryDetails(country);


// toggle the theme: dark and light.
theme_toggle.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});


// back botton for more country details.
const back_btn = document.querySelector('.back_btn')
back_btn.addEventListener('click', () => {
    location.href = './index.html';
});


function showCountryDetails(country){
    const country_big_details = document.querySelector('.country_big_details');
    console.log(country);
 
    let {region, subregion, capital, population, name:{official}, currencies, languages }  = country;
    let {name: {nativeName}}  = country;
    let html = `
   
     <div class="country_big_details_img_container">
         <img src="${country.flags.svg}" alt=" country flag" >
     </div>
     <div >
         <h3>${official}</h3>
         <div class="other_country_detail">
             <p className='native_name' ><strong>Native Name: </strong>${Object.values(nativeName)[0]["common"] }</p>
             <p className='top_level_domain' ><strong>Top Level Domain: </strong> Belgie</p>
             <p className='population' ><strong>Population: </strong>${population}</p>
             <p className='currencies'><strong>currencies: </strong> ${ Object.values(currencies)[0]["name"]} <span>(${ Object.values(currencies)[0]["symbol"]})</span></p>
             <p className='region'><strong>Region: </strong>${ region}</p>
             <p className='languages'><strong>Languages: </strong> ${ Object.values(languages)}</p>
             <p className='sub_region'><strong>Sub Region: </strong> ${subregion}</p>
             <p className='capital'><strong>Capital: </strong> ${capital}</p>
 
             <p class="border_countries"><strong>Border Countries: </strong> <span class="border_countries_borders">${ country.borders ? Object.values( country.borders):{}}</span></p>
         </div>
         
     </div>
    `
 
    country_big_details.innerHTML = html;
 
 }
