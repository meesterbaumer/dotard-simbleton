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
  