export default ( APP ) => {
  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.components( APP )
  })
}
