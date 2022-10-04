import { faker } from '@faker-js/faker'

type User = {
  name: string
  email: string
}

const getName = (): User => {
  const [firstName, lastName] = faker.name.fullName().split(' ')
  const randomEmail = faker.internet.email(firstName, lastName)
  return {
    name: `${firstName} ${lastName}`,
    email: randomEmail,
  }
}

// key resources: https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space?page=2&tab=modifieddesc#tab-top

function App() {
  const users = Array.from({ length: 100 }, getName)

  return (
    <div className="container flex flex-col mx-10">
      <div className="bg-green-300 h-52 ">First element</div>
      <div className="text-2xl font-bold p-2">Second element</div>
      <div className="second bg-blue-300  overflow-y-auto">
        {users.map(({ name, email }) => (
          <div className="flex flex-col p-2" key={email}>
            <div className="font-semibold">{name}</div>
            <div className="text-xs p-2">{email}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
