
const search_input = document.querySelector(".search_input");
const filter_region = document.querySelector(".filter_head");
const theme_toggle = document.querySelector(".dark_mode");
const region_list = document.querySelectorAll('.region_list li');
const country_container = document.querySelector('.section_2');

// get the countries using the fetch API.
const getCountries = async () =>{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
   displayCountries( countries);
}
getCountries();


// display the countries on the DOM.
const displayCountries = (countries) =>{
    // console.log(countries);

    countries.forEach(country =>{
        const card_container = document.createElement('div');
        card_container.classList.add('card_container');
        card_container.innerHTML = `

            <div class="country_img_container">
                <img src="${country.flags.svg}" alt="" class="country_img">
            </div>
            <div class="country_details">
                <h3 class="country_name">${ country.name.official}</h3>
                <p><strong>Population: </strong>${ country.population}</p>
                <p class="country_region"><strong>Region: </strong> ${ country.region}</p>
                <p><strong>Capital: </strong>${ country.capital}</p>
            </div>  
        
        `;

        card_container.addEventListener("click", () =>{
            console.log(country);
            // pass the country data through the URL path to the country details page;
            const params = new URLSearchParams();
            params.append('country', JSON.stringify(country)) ;

            location.href= "./showcountry.html?" + params.toString();
        });

        country_container.appendChild(card_container);


    })
}



// show or  hide the filter by region dropdown.
filter_region.addEventListener("click", () =>{
    const region_list = document.querySelector(".region_list");
    region_list.classList.toggle("toggle_filter_container");
});

// filter by region dropdown.
region_list.forEach(filter => {
    filter.addEventListener("click", () =>{  
        
        const country_region = document.querySelectorAll('.country_region');

        country_region.forEach(region =>{
           
            if(region.innerText.includes(filter.innerText) || filter.innerText == 'All'){
                region.parentElement.parentElement.style.display = 'grid';
            }else{
                region.parentElement.parentElement.style.display = 'none';
            }
        })
    })
})


// toggle the theme: dark and light.
theme_toggle.addEventListener("click", () =>{
     document.body.classList.toggle("dark");
});


// get the value from the search input and display.
search_input.addEventListener("input", () =>{
    const country_name = document.querySelectorAll(".country_name");
    country_name.forEach(country =>{
        if(country.innerText.toLowerCase().includes(search_input.value.toLowerCase())){
            country.parentElement.parentElement.style.display = 'grid';
        }else{
            country.parentElement.parentElement.style.display = 'none';
        }
    })
})