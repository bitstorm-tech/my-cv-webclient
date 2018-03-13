import Vuex from "vuex";

export default function createStore() {
  return new Vuex.Store({
    state: {
      profiles: [],
      selectedProfile: null
    },
    mutations: {
      loadProfiles(state, profiles) {
        state.profiles = profiles;
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
      upsertProfile(context, profile) {
        this.$axios.put("/profiles", profile)
          .then(response => context.commit('upsertProfile', response.data));
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
