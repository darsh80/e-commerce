import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";



export async  function proxy(req:NextRequest, res:NextResponse) {
console.log(req.nextUrl.pathname , "Proxy request received")
if(req.nextUrl.pathname.includes('/orders')){
  const token = await  getToken({req, secret: process.env.NEXTAUTH_SECRET } )
  if(!token){
    return NextResponse.redirect(`${process.env.BASE_URL}/login`)
  }else{
    return NextResponse.next()
  }
}

}



export const config = {
    matcher: ["/orders/"],
}