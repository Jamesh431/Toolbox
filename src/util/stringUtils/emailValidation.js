export default function emailValidation(email) {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return isEmailValid.test(email);
}

// regex used above specifically helps prevent catastrophic backtracking
