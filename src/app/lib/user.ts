export interface User {
    id: string
    name: string
    email: string
    password: string
  }
  
  // Initial users data
  const initialUsers: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      password: "password456",
    },
  ]
  
  // In-memory storage
  const users = [...initialUsers]
  
  export const findUser = (email: string): User | undefined => {
    return users.find((user) => user.email === email)
  }
  
  export const createUser = (name: string, email: string, password: string): User => {
    if (findUser(email)) {
      throw new Error("User already exists")
    }
  
    const newUser: User = {
      id: (users.length + 1).toString(),
      name,
      email,
      password,
    }
    users.push(newUser)
    return newUser
  }
  
  