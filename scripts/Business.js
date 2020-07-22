export const businessHTMLGenerator = (companyObj) => {
  return `
    <h2>${companyObj.companyName}</h2>
    <p>${companyObj.addressFullStreet}</p>
    <p>${companyObj.addressCity}, ${companyObj.addressStateCode} ${companyObj.addressZipCode}</p>
    <hr>
  `
}