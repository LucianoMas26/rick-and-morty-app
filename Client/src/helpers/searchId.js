export default function onSearch(
  id,
  state,
  dispatch,
  showErrorModal,
  addCharacter
) {
  fetch(
    `https://rick-and-morty-app-production-98fa.up.railway.app/rickandmorty/character/${id}`
  )
    .then((res) => res.json())
    .then((data) => {
      const isCharacterExist = state.some(
        (character) => character.id === data.id
      )
      if (!isCharacterExist) {
        data.name
          ? dispatch(addCharacter(data))
          : showErrorModal("No se encontró el personaje")
      } else {
        showErrorModal(`El personaje "${data.name}" ya existe`)
      }
    })
    .catch(() => {
      showErrorModal("Ocurrió un error al buscar el personaje")
    })
}
