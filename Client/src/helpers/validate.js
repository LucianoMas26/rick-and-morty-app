export default function validate(inputs) {
  const error = {}
  const emailRegex = /^\S+@\S+\.\S+$/
  const passwordRegex = new RegExp("[0-9]")
  if (!emailRegex.test(inputs.email)) {
    error.username = "Ingrese un mail valido"
  }
  if (!inputs.email) {
    error.username = "Campo obligatorio"
  }
  if (!inputs.email.length > 35) {
    error.username = "Maximo 35 caracteres"
  }
  if (!passwordRegex.test(inputs.password)) {
    error.password = "Ingrese al menos un numero"
  }
  if (inputs.email.length < 6 && inputs.email.length >= 10) {
    error.username = "Minimo 6 y maximo 10 numeros"
  }
  return error
}
