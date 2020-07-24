import { useBizProvider, useNewYorkBiz, useManufactureBiz } from "./BusinessProvider.js"
import { businessHTMLGenerator } from "./Business.js"


export const businessList = () => {
  const business = useBizProvider()
  const nyBiz = useNewYorkBiz()
  const manBiz =useManufactureBiz()

  const target = document.querySelector(".listBusinesses")

    let bizStringBuilder = ""
    for (const company of business) {
      bizStringBuilder += businessHTMLGenerator(company)
    }

    let nybizStringBuilder = ""
    for (const company of nyBiz) {
      nybizStringBuilder += businessHTMLGenerator(company)
    }

    let manufacturebizStringBuilder = ""
    for (const company of nyBiz) {
      manufacturebizStringBuilder += businessHTMLGenerator(company)
    }


  target.innerHTML += `
  <div class="allBiz" >
    <h2>Every Business</h2>
    ${bizStringBuilder}
  
    <br>
    <h2>NY Business</h2>
    ${nybizStringBuilder}
  
    <br>
    <h2>Manufacture Business</h2>
    ${manufacturebizStringBuilder}
    
    <br>

  </div>
  `
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           

            const foundBusiness = // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
  