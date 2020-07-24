export const agentHTML = (agentObj) => {
  return `
    <div class="agentCard">
      <h3>${agentObj.fullName}</h3>
      <h4>${agentObj.company}</h4>
      <h4>${agentObj.phoneNumber}</h4>
    </div>
  `
}