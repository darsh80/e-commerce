"use server";





type LoginValues = {
  email: string;
  password: string;
};


export async function loginAction(values: LoginValues) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data, "from login");
  console.log(res, "from login res");
  if(data.message === "success"){
   
    return true;

  }
  return data.message;
 
}