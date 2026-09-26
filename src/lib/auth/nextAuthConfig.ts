import { AuthOptions} from "next-auth";
import credentialProvider from "next-auth/providers/credentials";

export const NextAuthConfig:AuthOptions ={
providers:[
    credentialProvider({
        name:"mostafa",
    credentials:{
        email:{label:"email",type:"text",placeholder:"email"},
        password:{label:"password",type:"password",placeholder:"password"}
    },
    authorize :async(credentials)=>{
        const res =await fetch ("https://ecommerce.routemisr.com/api/v1/auth/signin",{
            method: "POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(credentials)
        })
        const data =await res.json();
        if(data.message === "success" && data.user){
            return {
                id:data.user.email,
                email:data.user.email,
                name:data.user.name,
                accessToken:data.token
            }

        }
        return null;
    }
    })
],
callbacks:{
     jwt :({token , user})=>{
        if(user){

            token.accessToken = (user as any).accessToken;
        }
        return token;
    },
    session :({session , token})=>{
    (session as any).accessToken = token.accessToken;
    return session;
    }
},
pages:{
    signIn:"/login"
} 

}