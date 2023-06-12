export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useIsLoggedIn();
    console.log(isLoggedIn.value)
    if (!isLoggedIn.value) {
      return navigateTo({ path: "/login" });
    }
  });