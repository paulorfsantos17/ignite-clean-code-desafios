interface IUser {
  id: string,
  name: string,
  email: string,
  password: string,
}

function updateUserRoute(body, params) {
  const { name, email, password } = body
  
  const { id } = params

  updateUserController({id, name, email, password})
}

function updateUserController({id, name, email, password}) {
  userRepository.update({id, name, email, password})
}

const userRepository = {
  update: ({id, name, email, password} : IUser) => { user: {
    id,
    name,
    email,
    password,
  } },
}