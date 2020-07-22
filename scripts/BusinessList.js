import { useBizProvider } from "./BusinessProvider.js"
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