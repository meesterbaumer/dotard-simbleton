export const businessHTMLGenerator = (companyObj) => {
  return `
    <h3>${companyObj.companyName}</h3>
    <p>${companyObj.addressFullStreet}</p>
    <p>${companyObj.addressCity}, ${companyObj.addressStateCode} ${companyObj.addressZipCode}</p>
    <hr>
  `
}