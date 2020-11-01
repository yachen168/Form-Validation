import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import FormEntry from "../views/FormEntry.vue";
import CreateAccount from "../views/CreateAccount.vue";
import GeneralInformation from "../views/GeneralInformation.vue";
import UpdateProfilePicture from "../views/UpdateProfilePicture.vue";
import PaymentMethod from "../views/PaymentMethod.vue";
import Completed from "../views/Completed.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FormEntry",
    redirect: "/create-account",
    component: FormEntry,
    children: [
      {
        path: "create-account",
        name: "CreateAccount",
        component: CreateAccount,
      },
      {
        path: "general-information",
        name: "GeneralInformation",
        component: GeneralInformation,
        beforeEnter: (to, from, next) => {
          if (store.getters.progress.firstStep === "done") {
            next();
          } else {
            next({ name: "CreateAccount" });
          }
        },
      },
      {
        path: "update-profile-picture",
        name: "UpdateProfilePicture",
        component: UpdateProfilePicture,
        beforeEnter: (to, from, next) => {
          if (store.getters.progress.secondStep === "done") {
            next();
          } else {
            next({ name: "GeneralInformation" });
          }
        },
      },
      {
        path: "payment-method",
        name: "PaymentMethod",
        component: PaymentMethod,
        beforeEnter: (to, from, next) => {
          if (store.getters.progress.thirdStep === "done") {
            next();
          } else {
            next({ name: "UpdateProfilePicture" });
          }
        },
      },
      {
        path: "/Completed",
        name: "Completed",
        component: Completed,
        beforeEnter: (to, from, next) => {
          if (store.getters.progress.lastStep === "done") {
            next();
          } else {
            next({ name: "PaymentMethod" });
          }
        },
      },
    ],
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
