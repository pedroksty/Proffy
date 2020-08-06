interface HandleSubmitProps {
  name: string
  email?: string
  password: string
  id: number
}

function handleSubmit({
  id,
  password,
  email,
  name
}: HandleSubmitProps): number {
  const idadeIsaac = 42

  return idadeIsaac
}
