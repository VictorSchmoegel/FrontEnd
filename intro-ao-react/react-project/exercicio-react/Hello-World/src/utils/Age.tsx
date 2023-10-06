function calculateAge(birthday: string): number {
  const [day, month, year] = birthday.split('/');
  const birthDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default calculateAge;