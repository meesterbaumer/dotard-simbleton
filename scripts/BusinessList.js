import { useBizProvider, newYorkBiz } from "./BusinessProvider.js"
import { businessHTMLGenerator } from "./Business.js"


export const businessList = () => {
    const target = document.querySelector(".listBusinesses")
    const business = useBizProvider()

    let bizStringBuilder = ""
    for (const company of business) {
      bizStringBuilder += businessHTMLGenerator(company)
    }
  target.innerHTML += `
  <div>
  ${bizStringBuilder}
  </div>
  `
}
  export const newYorkBusinessList = () => {
    const newYorkTarget = document.querySelector(".businessList--newYork")
    const newYorkBusiness = newYorkBiz()
  
    let newYorkBizStringBuilder = ""
    for (const company of newYorkBusiness) {
      newYorkBizStringBuilder += businessHTMLGenerator(company)
    }

  newYorkTarget.innerHTML += `
  <div>
  ${newYorkBizStringBuilder}
  </div>
  `
}