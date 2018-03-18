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
        profiles.forEach(profile => profileToViewModel(profile))
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
        profileToViewModel(profile);
        const index = state.profiles.findIndex(_profile => _profile.key === profile.key);

        if (!state.account.profileKeys.includes(profile.key)) {
          state.account.profileKeys.push(profile.key);
        }

        if (index < 0) {
          state.profiles.push(profile);
          state.selectedProfile = profile;
        } else {
          state.profiles[index] = profile;
        }
      },
      deleteSelectedProfile(state) {
        let index = state.profiles.findIndex(profile => profile.key === state.selectedProfile.key);

        if (index >= 0) {
          state.profiles.splice(index, 1);
        }

        index = state.account.profileKeys.findIndex(key => key === state.selectedProfile.key)

        if (index >= 0) {
          state.account.profileKeys.splice(index, 0);
        }

        if (state.profiles.length > 0) {
          state.selectedProfile = state.profiles[0];
        } else {
          state.selectedProfile = null;
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

        try {
          const email = JwtUtils.getEscapedEmail();
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

        try {
          const email = JwtUtils.getEscapedEmail();
          const response = await this.$axios.$get("/profiles/" + email);
          context.commit("loadProfiles", response);
        } catch (error) {
          console.log("Error while fetching profiles", error)
        }
      },
      async upsertProfile(context, profile) {
        try {
          profile.accountKey = context.state.account.key;
          const response = await this.$axios.$put("/profiles", profile);
          context.commit("upsertProfile", response);
        } catch (error) {
          console.log("Error while upserting profile", error);
        }
      },
      async deleteSelectedProfile(context) {
        try {
          const url = "/profiles/" + context.state.selectedProfile.key;
          await this.$axios.$delete(url);
          context.commit("deleteSelectedProfile");
        } catch (error) {
          console.log("Error while deleting selected profile", error)
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

function profileToViewModel(profile) {
  profile.payload.birthday = new Date(profile.payload.birthday);

  return profile;
}
