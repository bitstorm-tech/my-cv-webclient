<template>
  <v-app dark>
    <v-navigation-drawer app>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <nuxt-link to="/data">
              <v-icon>fa-cubes</v-icon>
              <v-list-tile-title>Data</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>Presentation</v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
