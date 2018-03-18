import Vuex from "vuex";
import JwtUtils from "@/assets/js/jwt-utils"

export default function createStore() {
  return new Vuex.Store({
    state: {
      account: null,
      profiles: [],
      selectedProfile: null
    },
    mutations: {
      loadProfiles(state, profiles) {
        profiles.forEach(profile => profile.payload.birthday = new Date())
        state.profiles = profiles;
        if (profiles.length > 0) {
          state.selectedProfile = profiles[0];
        }
      },
      loadAccount(state, account) {
        if (state.account === null) {
          state.account = account;
        }
      },
      upsertProfile(state, profile) {
        console.log("upsertProfile:", profile);
        const index = state.profiles.findIndex(_profile => _profile.key === profile.key);

        if (!state.account.profileKeys.includes(profile.key)) {
          state.account.profileKeys.push(profile.key);
        }

        if (index < 0) {
          state.profiles.push(profile);
        } else {
          state.profiles[index] = profile;
        }
      },
      setSelectedProfile(state, key) {
        if (key) {
          state.selectedProfile = state.profiles.find(profile => profile.key === key);
        } else {
          state.selectedProfile = null;
        }
      }
    },
    actions: {
      async loadAccount(context) {
        if (!process.browser) {
          return;
        }

        const email = JwtUtils.getEscapedEmail();

        try {
          const response = await this.$axios.$get("/accounts/" + email);
          context.commit("loadAccount", response);
        } catch (error) {
          console.log("Error while fetching account", error);
        }
      },
      async loadProfiles(context) {
        if (!process.browser) {
          return;
        }

        const email = JwtUtils.getEscapedEmail();

        try {
          const response = await this.$axios.$get("/profiles/" + email);
          context.commit('loadProfiles', response);
        } catch (error) {
          console.log("Error while fetching profiles", error)
        }
      },
      async upsertProfile(context, profile) {
        profile.accountKey = context.state.account.key;
        try {
          const response = await this.$axios.$put("/profiles", profile);
          context.commit("upsertProfile", response.data);
        } catch (error) {
          console.log("Error while upserting profile", error);
        }
      },
      setSelectedProfile(context, key) {
        context.commit('setSelectedProfile', key);
      }
    },
    getters: {
      profiles(state) {
        return state.profiles;
      },
      selectedProfile(state) {
        return state.selectedProfile;
      }
    }
  });
}
