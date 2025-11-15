export { default } from 'next-auth/middleware'

export const config = {
    matcher: ["/ticket/:path*","/event/add","/event/:eid/edit","/((?!signin|auth/login).*)",]
}