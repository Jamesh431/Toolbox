export default function phoneValidation(phone) {
  const numCheck = /^[0-9]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return phone.match(numCheck) !== null;
}
