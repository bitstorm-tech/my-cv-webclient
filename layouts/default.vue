<template>
  <v-app dark>
    <v-navigation-drawer app>
      <v-list>

        <v-list-tile nuxt to="/account">
          <v-list-tile-action>
            <v-icon medium>fa-user</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Account
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile nuxt to="/data/personal">
          <v-list-tile-action>
            <v-icon medium>fa-user</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Personal
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile nuxt to="/data/education">
          <v-list-tile-action>
            <v-icon medium>fa-graduation-cap</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Education
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile nuxt to="/data/projects">
          <v-list-tile-action>
            <v-icon medium>fa-cubes</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Projects
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile nuxt to="/presentation">
          <v-list-tile-action>
            <v-icon medium>fa-id-badge</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Presentation
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile nuxt to="/">
          <v-list-tile-action>
            <v-icon medium>fa-sign-out</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Logout
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
