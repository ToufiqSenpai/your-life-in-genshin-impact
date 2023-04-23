function mongooseErrorMessage(e: any) {
  const message: any = {}

  for (const err in e.errors) {
    message[err] = e.errors[err].message
  }
  return message
}

export default mongooseErrorMessage