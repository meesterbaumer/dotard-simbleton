import { usePurchaseAgent } from "./BusinessProvider.js";
import { agentHTML } from "./agents.js";

const target = document.querySelector(".agents")


export const agentList = () => {
  let agentString = ""
  const agentArray = usePurchaseAgent()
  
  for (const agent of agentArray) {
    agentString += agentHTML(agent)
  }
  target.innerHTML +=`
  <h2>Purchasing Agents</h2>  
  <div class="agentContainer">
    ${agentString}
  </div>
  `
}