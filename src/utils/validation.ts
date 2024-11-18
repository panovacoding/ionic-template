const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

const validatePassword = (password: string) => {
  return password.match(
    /^(?=.*[0-9!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,}$/
  );
};


export {validateEmail, validatePassword}