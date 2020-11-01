<template>
  <div>
    <div class="title">
      <h1>Create Account</h1>
      <span>Glad to see you here!</span>
    </div>
    <form>
      <div class="row">
        <div class="col">
          <div>
            <label for="account">Account</label>
            <input
              type="email"
              placeholder="example@email.com"
              v-model="account"
              :class="{ warn: !isAccountInputWarn}"
            />
            <Tooltip v-if="!isAccountInputWarn">INVALID EMAIL</Tooltip>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="●●●●●●"
              v-model="password"
              :class="{ warn: !isPasswordInputWarn }"
            />
            <Tooltip v-if="!isPasswordInputWarn">MINIMUN 8 CHARACTERS</Tooltip>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="●●●●●●"
              v-model="confirmPassword"
              :class="{ warn: !isConfirmPasswordInputWarn }"
            />
            <Tooltip v-if="!isConfirmPasswordInputWarn">NOT MATCH</Tooltip>
          </div>
        </div>
      </div>
      <button
        type="submit"
        :class="{ disabled: !isButtonDisabled }"
        @click.prevent="toNextPage"
      >SUBMIT & NEXT</button>
    </form>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import Validation from "@/Validation/Validation";   // RegExp

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      account: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    toNextPage() {
      if (this.isButtonDisabled) {
        this.$store.commit("changeStep", { 
          currentPage:"firstStep", 
          nextPage:"secondStep" 
          });
        this.$router.push({ name: "GeneralInformation" });
      }
    },
  },
  computed: {
    isAccountInputWarn() {
      const checkAccount = Validation.creatAccount.checkAccount;
      return !this.account || checkAccount.test(this.account);
    },
    isPasswordInputWarn() {
      const checkPassword = Validation.creatAccount.checkPassword;
      return !this.password || checkPassword.test(this.password);
    },
    isConfirmPasswordInputWarn() {
      return !this.confirmPassword || this.confirmPassword === this.password;
    },
    isButtonDisabled() {
      return (
        this.account &&
        this.password &&
        this.confirmPassword &&
        this.isAccountInputWarn &&
        this.isPasswordInputWarn &&
        this.isConfirmPasswordInputWarn
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
