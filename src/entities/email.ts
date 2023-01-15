import { Either, left, right } from '@/shared/either'
import { InvalidEmailError } from '@/entities/erros'
import { valid } from '@/entities/email-validator'

export class Email {
  public readonly value: string

  private constructor (email: string) {
    this.value = email
    Object.freeze(this)
  }

  public static create (email: string): Either<InvalidEmailError, Email> {
    if (valid(email)) {
      return right(new Email(email))
    }
    return left(new InvalidEmailError(email))
  }
}
