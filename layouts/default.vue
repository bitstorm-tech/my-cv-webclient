<template>
  <v-app dark>
    <v-navigation-drawer app>
      <v-list>
        <v-list-tile nuxt to="/data">
          <v-list-tile-action>
            <v-icon medium>fa-cubes</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Data
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
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
