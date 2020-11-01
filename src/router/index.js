import Vue from "vue";
import VueRouter from "vue-router";
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
    redirect: '/create-account',
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
      },
      {
        path: "update-profile-picture",
        name: "UpdateProfilePicture",
        component: UpdateProfilePicture,
      },
      {
        path: "payment-method",
        name: "PaymentMethod",
        component: PaymentMethod,
      },
    ],
  },
  {
    path: "/Completed",
    name: "Completed",
    component: Completed,
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
