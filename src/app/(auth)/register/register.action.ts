"use server";





type RegisterValues = {
  name: string;
  email: string;
  password: string;
};


export async function registerAction(values: RegisterValues) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data, "from register");
  console.log(res, "from register res");
  if(data.message === "success"){
   
    return true;

  }
  return data.message;
 
}