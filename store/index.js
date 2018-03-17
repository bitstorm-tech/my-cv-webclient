import Vuex from "vuex";

export default function createStore() {
  return new Vuex.Store({
    state: {
      account: null,
      profiles: [],
      selectedProfile: null
    },
    mutations: {
      loadProfiles(state, profiles) {
        state.profiles = profiles;
      },
      loadAccount(state, account) {
        if (state.account === null) {
          state.account = account;
        }
      },
      upsertProfile(state, profile) {
        const index = state.profiles.findIndex(_profile => _profile.id === profile.id);

        if (index < 0) {
          state.profiles.push(profile);
        } else {
          state.profiles[index] = profile;
        }
      },
      setSelectedProfile(state, id) {
        state.selectedProfile = state.profiles.find(profile => profile.id === id);
      }
    },
    actions: {
      async loadAccount(context, email) {
        try {
          const escapedEmail = email.replace("@", "%40");
          const response = await this.$axios.get("/accounts/" + escapedEmail);
          context.commit("loadAccount", response.data);
        } catch (error) {
          console.log("Error while load account", error);
        }
      },
      async upsertProfile(context, profile) {
        try {
          const response = await this.$axios.put("/profiles", profile);
          context.commit("upsertProfile", response.data);
        } catch (error) {
          console.log("Error while upserting profile", error);
        }
      },
      setSelectedProfile(context, id) {
        context.commit('setSelectedProfile', id);
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
