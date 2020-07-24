export const agentHTML = (agentObj) => {
  return `
    <div class="agentCard">
      <h2>${agentObj.fullName}</h2>
      <h4>${agentObj.company}</h4>
      <h4>${agentObj.phoneNumber}</h4>
    </div>
  `
}