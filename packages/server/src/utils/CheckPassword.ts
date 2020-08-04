import bcript from 'bcryptjs'

interface CheckPasswordProps {
  password: string
  password_hash: string
}

export default function ({
  password,
  password_hash
}: CheckPasswordProps): Promise<boolean> {
  return bcript.compare(password, password_hash)
}
