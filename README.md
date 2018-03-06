# nextjs-playground

1. `npm i`
2. `npm run dev` / `npm run build && npm run start`
3. Navigate to `localhost:3000/b`
4. Click link to client-side navigate to `/`.
5. Hit browser back.

Before Fix:

* You're now on `/b`, which shouldn't be allowed to render.
* You can refresh to get back to the SSR 404.

After proposed solution:

* Browser redirects to the bad destination (/b), which engages SSR and correctly shows a 404.
