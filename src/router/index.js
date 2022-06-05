import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

async function isAuthenticated(token) {
  let res = await fetch(`https://buddy4study.herokuapp.com/user/is-authenticated`, {
    method: "GET",
    headers: {
      "token": token,
    }
  })
  let txt = await res.status;
  return txt;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 200) {
          return {name: "main"}
        }
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 200) {
          return {name: "main"}
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 200) {
          return {name: "main"}
        }
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: {
        beforeRouteEnter(to, from, next) {
          const destination = {
            path: from.path || "/",
            query: from.query,
            params: from.params
          };
          if (!from) {
            console.log("no from");
          }
          localStorage.removeItem("user-token");
          next(destination);
        }
      }
    },
    {
      path: "/choose-interests",
      name: "interests",
      component: () => import("../views/InterestView.vue"),
      // beforeEnter: async (to, from) => {
      //   let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
      //   if(v == 200) {
      //     return {name: "main"}
      //   }
      // },
    },
    {
      path: "/home",
      name: "main",
      component: () => import("../views/MainView.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 401) {
          return {name: "login"}
        }
      }
    },
    {
      path: "/study-group/create",
      name: "create_study_group",
      component: () => import("../views/CreateGroup.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 401) {
          return {name: "login"}
        }
      }
    },
    {
      path: "/study-group/:id",
      name: "group_info",
      component: () => import("../views/GroupInfo.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 401) {
          return {name: "login"}
        }
      }
    },
    {
      path: "/user/get-info",
      name: "user_info",
      component: () => import ("../views/UserInfo.vue"),
      beforeEnter: async (to, from) => {
        let v = await isAuthenticated(localStorage.getItem("user-token")).then(response => {return response});
        if(v == 401) {
          return {name: "login"}
        }
      }
    }
  ],
});

export default router;
