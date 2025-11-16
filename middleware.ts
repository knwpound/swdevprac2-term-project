import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/api/auth/signin" }, 
});

export const config = {
  matcher: ["/ticket/:path*", "/event/add", "/event/:eid/edit"], // protected routes
};
