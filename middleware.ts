export { default } from 'next-auth/middleware'

export const config = {
    matcher: ["/ticket/:path*","/event/add","/event/:eid/edit", "/((?!api|_next|favicon.ico|login|register).*)",]
}